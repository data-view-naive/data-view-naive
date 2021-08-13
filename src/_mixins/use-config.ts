/**
 * @author 成雨
 * @date 2021/8/13
 * @Description:
 */
import { computed, ComputedRef, inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/src/ConfigProvider'
import { ConfigProviderInjection } from '../config-provider/src/internal-interface'

type UseConfigProps = Readonly<{
  [key: string]: unknown
}>

export const defaultClsPrefix = 'd'

function useConfig (props: UseConfigProps = {}): {
  DConfigProvider: ConfigProviderInjection | null
  mergedClsPrefixRef: ComputedRef<string>
} {
  const DConfigProvider = inject(configProviderInjectionKey, null)

  return {
    DConfigProvider,
    mergedClsPrefixRef: computed(() => {
      const clsPrefix = DConfigProvider?.mergedClsPrefixRef.value
      return clsPrefix || defaultClsPrefix
    })
  }
}

export default useConfig
