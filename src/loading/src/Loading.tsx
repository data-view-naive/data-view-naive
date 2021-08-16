/**
 * @author 成雨
 * @date 2021/8/15
 * @Description:
 */
import { defineComponent, h } from 'vue'
import { useConfig } from '../../_mixins'

export default defineComponent({
  name: 'Loading',
  props: {},
  setup (props) {
    const { mergedClsPrefixRef } = useConfig(props)

    return {
      mergedClsPrefixRef
    }
  },
  render () {
    const { mergedClsPrefixRef } = this

    return (
      <div class={`${mergedClsPrefixRef}-loading`}>
        <svg width="100" height="100" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="none"
            stroke="#3be6cb"
            stroke-width="3"
            stroke-dasharray="34"
            stroke-linejoin="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 25 25;360 25 25"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke"
              repeatCount="indefinite"
              values="#3be6cb;#02bcfe;#3be6cb;"
              dur="4s"
            />
          </circle>
          <circle
            cx="25"
            cy="25"
            r="12"
            fill="none"
            stroke-width="3"
            stroke-dasharray="19"
            stroke="#02bcfe"
            stroke-linecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 25 25;0 25 25"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke"
              repeatCount="indefinite"
              values="#02bcfe;#3be6cb;#02bcfe;"
              dur="4s"
            />
          </circle>
        </svg>
      </div>
    )
  }
})
