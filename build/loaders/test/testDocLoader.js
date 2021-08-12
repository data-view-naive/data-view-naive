const docLoader = require('../naive-ui-doc-loader')
const fs = require('fs')
const path = require('path')

const p = path.resolve(__dirname, 'component.test.md')
const demoMd = fs.readFileSync(p).toString()
docLoader(demoMd, p).then((data) => {
  console.log(data)
})
