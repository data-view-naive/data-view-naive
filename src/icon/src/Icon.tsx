/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h } from 'vue'
import { useStyle, useConfig } from '../../_mixins'
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
    const { mergedClsPrefixRef } = useConfig(props)
    const iconName = `#${props.prefix}-${props.name || ''}`

    useStyle('Icon', style, mergedClsPrefixRef)

    return {
      iconName,
      mergedClsPrefixRef
    }
  },
  render () {
    const { mergedClsPrefixRef, iconName, style } = this

    return (
      <div style={style} class={`${mergedClsPrefixRef}-icon`}>
        <svg>
          <use href={iconName} />
        </svg>
      </div>
    )
  }
})

export default Icon
