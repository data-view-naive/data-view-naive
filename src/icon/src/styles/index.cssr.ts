/**
 * @author 成雨
 * @date 2021/8/12
 * @Description:
 */

import { cE, cB } from '../../../_utils/cssr'

cB('icon', `
  display: inline-block;
`, [
  cE(
    'svg',
    `
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    `
  )
]).mount()
