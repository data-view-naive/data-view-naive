/**
 * @author 成雨
 * @date 2021/8/12
 * @Description:
 */

import { c, cB } from '../../../_utils/cssr'

export default cB('icon', `
  display: inline-block;
`, [
  c(
    'svg',
    `
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    `
  )
])
