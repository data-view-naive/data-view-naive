/**
 * @author 成雨
 * @date 2021/8/20
 * @Description:
 */

import {
  defineComponent,
  h,
  ref,
  nextTick,
  onMounted,
  onUnmounted,
  PropType
} from 'vue'
import { useConfig, useStyle } from '../../_mixins'
import { debounce } from 'lodash-es'
import style from './styles/index.cssr'

export default defineComponent({
  name: 'Container',
  props: {
    options: Object as PropType<{
      width?: number
      height?: number
    }>
  },
  setup (props) {
    const { mergedClsPrefixRef } = useConfig(props)
    useStyle('Container', style, mergedClsPrefixRef)

    const divRef = ref<HTMLDivElement | null>(null)
    const width = ref(0)
    const height = ref(0)
    const originalWidth = ref(0)
    const originalHeight = ref(0)
    const ready = ref(false)
    let observer: MutationObserver | null

    const initSize = async (): Promise<boolean> => {
      await nextTick(() => {
        if (divRef.value) {
          // 获取大屏的真实尺寸
          if (props.options?.width && props.options?.height) {
            width.value = props.options.width
            height.value = props.options.height
          } else {
            width.value = divRef.value.clientWidth
            height.value = divRef.value.clientHeight
          }
          // 获取画布尺寸
          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width
            originalHeight.value = window.screen.height
          }
          // console.log(width.value, height.value, originalWidth.value, originalHeight.value)
        }
      })
      return true
    }

    const updateSize = (): void => {
      if (divRef.value) {
        if (width.value && height.value) {
          divRef.value.style.width = `${width.value}px`
          divRef.value.style.height = `${height.value}px`
        } else {
          divRef.value.style.width = `${originalWidth.value}px`
          divRef.value.style.height = `${originalHeight.value}px`
        }
      }
    }

    const updateScale = (): void => {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      // 获取大屏最终的宽高
      const realWidth = width.value || originalWidth.value
      const realHeight = height.value || originalHeight.value
      const widthScale = currentWidth / realWidth
      const heightScale = currentHeight / realHeight
      divRef.value &&
        (divRef.value.style.transform = `scale(${widthScale}, ${heightScale})`)
    }

    const onResize = async (): Promise<void> => {
      await initSize()
      updateScale()
    }

    const initMutationObserver = (): void => {
      if (divRef.value) {
        const MutationObserver = window.MutationObserver
        observer = new MutationObserver(() => {
          void onResize()
        })
        observer.observe(divRef.value, {
          attributes: true,
          attributeFilter: ['style'],
          attributeOldValue: true
        })
      }
    }

    const removeMutationObserver = (): void => {
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    }

    onMounted(async () => {
      ready.value = false
      await initSize()
      updateSize()
      updateScale()
      window.addEventListener(
        'resize',
        debounce(() => {
          void onResize()
        }, 100)
      )
      initMutationObserver()
      ready.value = true
    })

    onUnmounted(() => {
      window.removeEventListener('resize', () => {
        void onResize()
      })
      removeMutationObserver()
    })

    return {
      mergedClsPrefixRef,
      divRef
    }
  },
  render () {
    const { $slots, mergedClsPrefixRef } = this

    return (
      <div class={`${mergedClsPrefixRef}-container`} ref="divRef">
        {$slots}
      </div>
    )
  }
})
