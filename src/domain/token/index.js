const t = require('tcomb')

const Token = t.struct({
  identity: t.String,
  password: t.String
})

module.exports = Token
