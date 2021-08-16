/**
 * @author 成雨
 * @date 2021/8/15
 * @Description:
 */
import { computed, defineComponent, h } from 'vue'
import { useConfig } from '../../_mixins'

export default defineComponent({
  name: 'Loading',
  props: {
    width: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 50
    },
    outsideColor: {
      type: String,
      default: '#3be6cb'
    },
    insideColor: {
      type: String,
      default: '#02bcfe'
    },
    duration: {
      type: [Number, String],
      default: 2
    }
  },
  setup (props) {
    const { mergedClsPrefixRef } = useConfig(props)
    const outsideColorAnimation = computed(
      () => `${props.outsideColor};${props.insideColor};${props.outsideColor}`
    )
    const insideColorAnimation = computed(
      () => `${props.insideColor};${props.outsideColor};${props.insideColor}`
    )

    return {
      mergedClsPrefixRef,
      outsideColorAnimation,
      insideColorAnimation
    }
  },
  render () {
    const {
      mergedClsPrefixRef,
      width,
      height,
      outsideColor,
      insideColor,
      duration,
      outsideColorAnimation,
      insideColorAnimation
    } = this

    return (
      <div class={`${mergedClsPrefixRef}-loading`}>
        <svg width={width} height={height} viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="none"
            stroke={outsideColor}
            stroke-width="3"
            stroke-dasharray="34"
            stroke-linejoin="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 25 25;360 25 25"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke"
              repeatCount="indefinite"
              values={outsideColorAnimation}
              dur={`${+duration * 2}s`}
            />
          </circle>
          <circle
            cx="25"
            cy="25"
            r="12"
            fill="none"
            stroke-width="3"
            stroke-dasharray="19"
            stroke={insideColor}
            stroke-linecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 25 25;0 25 25"
              dur={`${duration}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke"
              repeatCount="indefinite"
              values={insideColorAnimation}
              dur={`${+duration * 2}s`}
            />
          </circle>
        </svg>
      </div>
    )
  }
})
