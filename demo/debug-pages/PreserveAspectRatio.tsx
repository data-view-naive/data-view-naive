/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h } from 'vue'
import { NP } from 'naive-ui'

const Test02 = defineComponent({
  name: 'PreserveAspectRatio',
  components: {},
  setup () {
    return {}
  },
  render () {
    return (
      <div style={{ padding: '24px' }}>
        <NP>{() => 'preserveAspectRatio: xMidYMid meet'}</NP>
        <NP>
          {() => (
            <svg
              width="500"
              height="200"
              viewBox="0 0 200 200"
              style="border: 1px solid #000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect
                x="100"
                y="100"
                width="100"
                height="50"
                stroke-width="10"
                style="stroke: #000000; fill:none;"
              />
            </svg>
          )}
        </NP>
        <NP>{() => 'preserveAspectRatio: xMaxYMin meet'}</NP>
        <NP>
          {() => (
            <svg
              width="500"
              height="200"
              viewBox="0 0 200 200"
              style="border: 1px solid #000000"
              preserveAspectRatio="xMaxYMin meet"
            >
              <rect
                x="100"
                y="100"
                width="100"
                height="50"
                stroke-width="10"
                style="stroke: #000000; fill:none;"
              />
            </svg>
          )}
        </NP>
        <NP>{() => 'preserveAspectRatio: xMidYMax slice'}</NP>
        <NP>
          {() => (
            <svg
              width="500"
              height="200"
              viewBox="0 0 200 200"
              style="border: 1px solid #000000"
              preserveAspectRatio="xMidYMax slice"
            >
              <rect
                x="100"
                y="100"
                width="100"
                height="50"
                stroke-width="10"
                style="stroke: #000000; fill:none;"
              />
            </svg>
          )}
        </NP>
        <NP>{() => 'preserveAspectRatio: xMaxYMin slice'}</NP>
        <NP>
          {() => (
            <svg
              width="500"
              height="200"
              viewBox="0 0 200 200"
              style="border: 1px solid #000000"
              preserveAspectRatio="xMaxYMin slice"
            >
              <rect
                x="100"
                y="100"
                width="100"
                height="50"
                stroke-width="10"
                style="stroke: #000000; fill:none;"
              />
            </svg>
          )}
        </NP>
      </div>
    )
  }
})

export default Test02
