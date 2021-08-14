/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h } from 'vue'

const Test02 = defineComponent({
  name: 'Test02',
  components: {},
  setup () {
    return {}
  },
  render () {
    return (
      <div style={{ padding: '16px 16px 24px 16px' }}>
        <svg width="500" height="200" style="border: 1px solid #000000">
          <rect
            x="200"
            y="100"
            width="100"
            height="50"
            stroke-width="10"
            style="stroke: #000000; fill:none;"
          />
        </svg>
      </div>
    )
  }
})

export default Test02
