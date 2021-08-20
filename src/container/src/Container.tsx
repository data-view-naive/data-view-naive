/**
 * @author 成雨
 * @date 2021/8/20
 * @Description:
 */

import { defineComponent, h, ref, watchEffect } from 'vue'
import { useConfig, useStyle } from '../../_mixins'
import style from '../../icon/src/styles/index.cssr'

export default defineComponent({
  name: 'Container',
  props: {},
  setup (props) {
    const { mergedClsPrefixRef } = useConfig(props)
    useStyle('Container', style, mergedClsPrefixRef)

    const divRef = ref<HTMLDivElement | null>(null)

    const click = (): void => {
      console.log(divRef.value)
    }

    watchEffect(() => {
      console.log('watchEffect ref')
      console.log(divRef.value)
    })

    return {
      mergedClsPrefixRef,
      divRef,
      click
    }
  },
  render () {
    const { $slots, mergedClsPrefixRef, click } = this

    return (
      <div class={`${mergedClsPrefixRef}-container`} ref="divRef">
        <button onClick={click}>get ref</button>
        <div>{$slots}</div>
      </div>
    )
  }
})
