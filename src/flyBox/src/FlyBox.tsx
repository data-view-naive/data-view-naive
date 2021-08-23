/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h, ref, computed, onMounted } from 'vue'
import { useStyle, useConfig } from '../../_mixins'
import style from './styles/index.cssr'
import { v4 as uuidv4 } from 'uuid'

const FlyBox = defineComponent({
  name: 'FlyBox',
  props: {
    lineColor: {
      type: String,
      default: '#235fa7'
    },
    starColor: {
      type: String,
      default: '#4fd2dd'
    },
    starLength: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [Number, String],
      default: 3
    }
  },
  setup (props) {
    const { mergedClsPrefixRef } = useConfig(props)
    useStyle('FlyBox', style, mergedClsPrefixRef)

    const uuid = uuidv4()
    const dFlyBoxRef = ref<HTMLDivElement | null>(null)
    const width = ref(0)
    const height = ref(0)
    const refName = 'dFlyBox'
    const pathId = `${refName}-path-${uuid}`
    const radialGradientId = `${refName}-gradient-${uuid}`
    const maskId = `${refName}-mask-${uuid}`
    const path = computed(
      () =>
        `M5 5 L${width.value - 5} 5 L${width.value - 5} ${
          height.value - 5
        } L5 ${height.value - 5} Z`
    )

    const init = (): void => {
      if (dFlyBoxRef.value) {
        width.value = dFlyBoxRef.value.clientWidth
        height.value = dFlyBoxRef.value.clientHeight
      }
    }

    onMounted(() => {
      init()
    })

    return {
      mergedClsPrefixRef,
      dFlyBoxRef,
      pathId,
      radialGradientId,
      maskId,
      path,
      width,
      height
    }
  },
  render () {
    const {
      path,
      width,
      height,
      pathId,
      maskId,
      duration,
      lineColor,
      starLength,
      radialGradientId,
      mergedClsPrefixRef,
      $slots
    } = this

    return (
      <div class={`${mergedClsPrefixRef}-flyBox`} ref="dFlyBoxRef">
        <svg width={width} height={height}>
          <defs>
            <path id={pathId} d={path} fill="none" />
            <radialGradient
              id={radialGradientId}
              cx="50%"
              cy="50%"
              fx="100%"
              fy="50%"
              r="50%"
            >
              <stop offset="0%" stop-color="#fff" stop-opacity="1" />
              <stop offset="100%" stop-color="#fff" stop-opacity="0" />
            </radialGradient>
            <mask id={maskId}>
              <circle
                r={starLength}
                cx="0"
                cy="0"
                fill={`url(#${radialGradientId})`}
              >
                <animateMotion
                  dur={`${duration}s`}
                  rotate="auto"
                  repeatCount="indefinite"
                >
                  <mpath href={path} />
                </animateMotion>
              </circle>
            </mask>
          </defs>
          <use href={`#${pathId}`} stroke-width="1" stroke={lineColor} />
          <use
            href={`#${pathId}`}
            stroke-width="3"
            stroke="starColor"
            mask={`url(#${maskId})`}
          />
        </svg>
        <div class={`${mergedClsPrefixRef}-flyBox--content`}>{$slots}</div>
      </div>
    )
  }
})

export default FlyBox
