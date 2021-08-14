/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h } from 'vue'

const Test01 = defineComponent({
  name: 'Test01',
  setup () {
    return {}
  },
  render () {
    return (
      <div style={{ color: 'red', padding: '16px 16px 24px 16px' }}>
        <svg width="100px" height="100px">
          <line
            x1={0}
            y1={50}
            x2={100}
            y2={50}
            stroke-width={8}
            stroke="currentColor"
          />
          <line
            x1={50}
            y1={0}
            x2={50}
            y2={100}
            stroke-width={8}
            stroke="currentColor"
          />
        </svg>
      </div>
    )
  }
})

export default Test01
