/**
 * @author 成雨
 * @date 2021/8/12
 * @Description:
 */

import CSSRender from 'css-render'
import BEMPlugin from '@css-render/plugin-bem'

const namespace = 'd'
const prefix = `.${namespace}-`
const elementPrefix = '__'
const modifierPrefix = '--'

const cssr = CSSRender()
const plugin = BEMPlugin({
  blockPrefix: prefix,
  elementPrefix,
  modifierPrefix
})
cssr.use(plugin)
const { c, find } = cssr
const { cB, cE, cM, cNotM } = plugin

export { c, find, cB, cE, cM, cNotM }

export { createKey } from './create-key'
