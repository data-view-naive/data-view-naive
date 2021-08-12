const demoLoader = require('../naive-ui-demo-loader')
const fs = require('fs')
const path = require('path')

const p = path.resolve(__dirname, 'basic.test.md')
const demoMd = fs.readFileSync(p).toString()
console.log(demoLoader(demoMd, p))
