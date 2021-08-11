/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h } from 'vue'
import './styles/index.cssr'

const Icon = defineComponent({
  name: 'Icon',
  props: {
    name: String,
    prefix: {
      type: String,
      default: 'icon'
    },
    style: Object
  },
  setup (ctx) {
    const iconName = `#${ctx.prefix}-${ctx.name || ''}`
    return {
      iconName
    }
  },
  render () {
    return (
      <div style={this.style} class="d-icon">
        <svg class="d-icon__svg">
          <use href={this.iconName}></use>
        </svg>
      </div>
    )
  }
})

export default Icon
