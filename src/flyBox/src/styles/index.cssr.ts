/**
 * @author 成雨
 * @date 2021/8/12
 * @Description:
 */

import { c, cB, cE } from '../../../_utils/cssr'

export default cB('flyBox', `
    position: relative;
    width: 100%;
    height: 100%;
`, [
  c('svg', `
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  `),
  cE('content', `
      width: 100%;
      height: 100%;
      padding: 2px;
      box-sizing: border-box;
  `)
])
