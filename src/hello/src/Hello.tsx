/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h } from 'vue'

const Hello = defineComponent({
  name: 'Hello',
  setup () {
    return {
      a: 123
    }
  },
  render () {
    return (
      <div>
        Hello: {this.a}
      </div>
    )
  }
})

export default Hello
