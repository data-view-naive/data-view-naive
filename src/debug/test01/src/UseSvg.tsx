/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h } from 'vue'
import { NP } from 'naive-ui'

const UseSvg = defineComponent({
  name: 'UseSvg',
  components: {},
  setup () {
    return {}
  },
  render () {
    return (
      <div>
        <NP>
          defs g
        </NP>
        <svg width="0" height="0" viewBox="0 0 100 100">
          <defs>
            <g id="arrow">
              <polyline
                points="30 20, 70 50, 30 80"
                fill="transparent"
                stroke="currentColor"
                stroke-width="3"
              />
            </g>
          </defs>
        </svg>
        <NP>
          <svg width={100} height={100} style={{ color: 'red' }} viewBox="0 0 100 100">
            <use href="#arrow"/>
          </svg>
        </NP>
        <NP>
          symbol
        </NP>
        <svg width="0" height="0">
          <symbol id="cross" viewBox="0 0 100 100">
            <line x1="50" y1="10" x2="50" y2="90" stroke-width="8" stroke="currentColor"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor"/>
          </symbol>
        </svg>
        <NP>
          <svg style={{ color: 'red' }}>
            <use href="#cross"/>
          </svg>
        </NP>
      </div>
    )
  }
})

export default UseSvg
