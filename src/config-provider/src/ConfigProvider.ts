/**
 * @author 成雨
 * @date 2021/8/13
 * @Description:
 */
import {
  computed,
  defineComponent,
  inject,
  provide,
  h,
  renderSlot,
  InjectionKey
} from 'vue'
import { defaultClsPrefix } from '../../_mixins/use-config'
import { ConfigProviderInjection } from './internal-interface'

export const configProviderInjectionKey: InjectionKey<ConfigProviderInjection> =
  Symbol('configProviderInjection')

export const configProviderProps = {
  abstract: Boolean,
  clsPrefix: String,
  tag: {
    type: String,
    default: 'div'
  }
} as const

export interface ConfigProviderProps {
  abstract: boolean
  clsPrefix: string
  tag: string
}

export default defineComponent({
  name: 'ConfigProvider',
  alias: ['App'],
  props: configProviderProps,
  setup (props) {
    const ConfigProvider = inject(configProviderInjectionKey, null)
    const mergedClsPrefixRef = computed(() => {
      const { clsPrefix } = props
      return ConfigProvider?.mergedClsPrefixRef.value ?? clsPrefix
    })

    provide(configProviderInjectionKey, {
      mergedClsPrefixRef
    })

    return {
      mergedClsPrefix: mergedClsPrefixRef
    }
  },
  render () {
    return !this.abstract
      ? h(
        this.tag,
        {
          class: `${this.mergedClsPrefix || defaultClsPrefix}-config-provider`
        },
        renderSlot(this.$slots, 'default')
      )
      : renderSlot(this.$slots, 'default')
  }
})
