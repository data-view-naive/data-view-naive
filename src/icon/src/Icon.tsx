/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h, toRef } from 'vue'
import { useStyle } from '../../_mixins'
import style from './styles/index.cssr'

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
  setup (props) {
    useStyle('BaseIcon', style, toRef(props, 'prefix'))
    const iconName = `#${props.prefix}-${props.name || ''}`
    return {
      iconName
    }
  },
  render () {
    return (
      <div style={this.style} class="icon-base">
        <svg class="icon-base__svg">
          <use href={this.iconName} />
        </svg>
      </div>
    )
  }
})

export default Icon
