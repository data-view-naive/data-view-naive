export const enDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../pages/docs/introduction/enUS/index.md')
  },
  {
    path: 'installation',
    component: () => import('../pages/docs/installation/enUS/index.md')
  },
  {
    path: 'usage-sfc',
    component: () => import('../pages/docs/usage-sfc/enUS/index.md')
  },
  {
    path: 'supported-platforms',
    component: () => import('../pages/docs/supported-platforms/enUS/index.md')
  },
  {
    path: 'i18n',
    component: () => import('../pages/docs/i18n/enUS/index.md')
  },
  {
    path: 'changelog',
    component: () => import('../pages/docs/changelog/enUS/index.vue')
  },
  {
    path: 'jsx',
    component: () => import('../pages/docs/jsx/enUS/index.md')
  },
  {
    path: 'import-on-demand',
    component: () => import('../pages/docs/import-on-demand/enUS/index.md')
  }
]

export const zhDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../pages/docs/introduction/zhCN/index.md')
  },
  {
    path: 'installation',
    component: () => import('../pages/docs/installation/zhCN/index.md')
  },
  {
    path: 'usage-sfc',
    component: () => import('../pages/docs/usage-sfc/zhCN/index.md')
  },
  {
    path: 'supported-platforms',
    component: () => import('../pages/docs/supported-platforms/zhCN/index.md')
  },
  {
    path: 'i18n',
    component: () => import('../pages/docs/i18n/zhCN/index.md')
  },
  {
    path: 'changelog',
    component: () => import('../pages/docs/changelog/zhCN/index.vue')
  },
  {
    path: 'jsx',
    component: () => import('../pages/docs/jsx/zhCN/index.md')
  },
  {
    path: 'import-on-demand',
    component: () => import('../pages/docs/import-on-demand/zhCN/index.md')
  }
]

export const enComponentRoutes = [
  {
    path: 'hello',
    component: () => import('../../src/hello/demos/enUS/index.demo-entry.md')
  }
]

export const zhComponentRoutes = [
  // components
  {
    path: 'hello',
    component: () => import('../../src/hello/demos/zhCN/index.demo-entry.md')
  },

  // debug
  {
    path: 'test01',
    component: () => import('../../src/debug/test01/demos/zhCN/index.demo-entry.md')
  }
]

export const routes = [
  {
    name: 'home',
    path: '/:lang/:theme',
    component: () => import('../pages/home/index.vue')
  },
  {
    name: 'enDocs',
    path: '/en-US/:theme/docs',
    component: () => import('../pages/Layout.vue'),
    children: enDocRoutes
  },
  {
    name: 'zhDocs',
    path: '/zh-CN/:theme/docs',
    component: () => import('../pages/Layout.vue'),
    children: zhDocRoutes
  },
  {
    name: 'enComponents',
    path: '/en-US/:theme/components',
    component: () => import('../pages/Layout.vue'),
    children: enComponentRoutes
  },
  {
    name: 'zhComponents',
    path: '/zh-CN/:theme/components',
    component: () => import('../pages/Layout.vue'),
    children: zhComponentRoutes
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
      params: {
        lang: navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US',
        theme: 'os-theme'
      }
    }
  }
]
