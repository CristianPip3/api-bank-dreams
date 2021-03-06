const t = require('tcomb')
const { compose } = require('ramda')
const { cleanData } = require('../helper')

const User = t.struct({
  id: t.maybe(t.String),
  identity: t.String,
  firstName: t.String,
  password: t.maybe(t.String),
  isVerified: t.maybe(t.Boolean),
  isDeleted: t.maybe(t.Boolean),
  products: t.maybe(t.list(t.Object)),
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date)
})

module.exports = compose(cleanData, User)
