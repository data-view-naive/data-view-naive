// rubbish code here

import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const renderMenuLabel = (option) => {
  if (!('path' in option) || option.label === '--Debug') {
    return option.label
  }
  return h(
    RouterLink,
    {
      to: option.path
    },
    { default: () => option.label }
  )
}

const appendCounts = (item) => {
  if (!item.children) {
    item.count = 1
    return item
  }
  if (item.children) {
    item.children.forEach(appendCounts)
    item.count = item.children.reduce((sum, item) => sum + item.count, 0)
    if (item.type === 'group') {
      item.en += ` (${item.count})`
      item.zh += ` (${item.count})`
    }
    return item
  }
}

const createDebugDemos = (item, mode) => {
  if (__DEV__ && mode === 'debug') {
    return [item]
  } else return []
}

function createItems (lang, theme, prefix, items) {
  const isZh = lang === 'zh-CN'
  const langKey = isZh ? 'zh' : 'en'
  return items.map((rawItem) => {
    const item = {
      ...rawItem,
      key: rawItem.en,
      label: rawItem[langKey] || rawItem.en,
      extra: rawItem.enSuffix && isZh ? rawItem.en : undefined,
      path: rawItem.path
        ? `/${lang}/${theme}` + prefix + rawItem.path
        : undefined
    }
    if (rawItem.children) {
      item.children = createItems(lang, theme, prefix, rawItem.children)
    }
    return item
  })
}

export function createDocumentationMenuOptions ({ lang, theme, mode }) {
  return createItems(lang, theme, '/docs', [
    {
      en: 'Introduction',
      zh: '介绍',
      type: 'group',
      children: [
        {
          en: 'Data View',
          zh: 'Data View',
          path: '/introduction'
        }
      ]
    },
    {
      en: 'Getting Started',
      zh: '快速上手',
      type: 'group',
      children: [
        {
          en: 'Installation',
          zh: '安装',
          path: '/installation'
        }
      ]
    },
    {
      en: 'Guides',
      zh: '指南',
      type: 'group',
      children: [
        {
          en: 'JSX & TSX',
          zh: 'JSX & TSX',
          path: '/jsx'
        }
      ]
    },
    {
      en: 'Version',
      zh: '版本',
      type: 'group',
      children: [
        {
          en: 'Change Log',
          zh: '变更日志',
          path: '/changelog'
        }
        // {
        //   en: 'Migrate From V1',
        //   zh: '从 V1 升级',
        //   path: '/from-v1'
        // }
      ]
    }
  ])
}

export function createComponentMenuOptions ({ lang, theme, mode }) {
  return createItems(lang, theme, '/components', [
    appendCounts({
      zh: '通用组件',
      en: 'Common Components',
      type: 'group',
      children: [
        {
          en: 'Hello',
          zh: '你好',
          enSuffix: true,
          path: '/hello'
        },
        {
          en: 'Icon',
          zh: '图标',
          enSuffix: true,
          path: '/icon'
        },
        {
          en: 'Loading',
          zh: '加载',
          enSuffix: true,
          path: '/loading'
        }
      ]
    }),
    appendCounts({
      zh: '配置组件',
      en: 'Config Components',
      type: 'group',
      children: [
        {
          en: 'Config Provider',
          zh: '全局化配置',
          enSuffix: true,
          path: '/config-provider'
        }
      ]
    }),
    ...createDebugDemos(
      {
        en: '--Debug',
        children: [
          {
            en: 'test01',
            zh: 'test01',
            enSuffix: true,
            path: '/test01'
          },
          {
            en: 'test02',
            zh: 'test02',
            enSuffix: true,
            path: '/test02'
          },
          {
            en: 'useSvg',
            zh: 'useSvg',
            enSuffix: true,
            path: '/useSvg'
          },
          {
            en: 'viewBox',
            zh: 'viewBox',
            enSuffix: true,
            path: '/viewBox'
          },
          {
            en: 'svgAnimation',
            zh: 'svgAnimation',
            enSuffix: true,
            path: '/svgAnimation'
          }
        ]
      },
      mode
    )
  ])
}
