/**
 * @author 成雨
 * @date 2021/8/7
 * @Description:
 */
import { defineComponent, h } from 'vue'
import { useStyle, useConfig } from '../../_mixins'
import style from './styles/index.cssr'

const FlyBox = defineComponent({
  name: 'FlyBox',
  props: {
    lineColor: {
      type: String,
      default: '#235fa7'
    },
    starColor: {
      type: String,
      default: '#4fd2dd'
    },
    starLength: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [Number, String],
      default: 3
    }
  },
  setup (props) {
    const { mergedClsPrefixRef } = useConfig(props)

    useStyle('FlyBox', style, mergedClsPrefixRef)

    return {
      mergedClsPrefixRef
    }
  },
  render () {
    const { mergedClsPrefixRef } = this

    return <div class={`${mergedClsPrefixRef}-flyBox`}></div>
  }
})

export default FlyBox
