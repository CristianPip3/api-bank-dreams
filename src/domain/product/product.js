const t = require('tcomb')
const { compose } = require('ramda')
const { cleanData } = require('../helper')

const Product = t.struct({
  id: t.maybe(t.String),
  userId: t.maybe(t.String),
  typeProductId: t.maybe(t.String),
  name: t.maybe(t.String),
  balance: t.maybe(t.Number),
  typeProduct: t.maybe(t.Object),
  transactions: t.maybe(t.list(t.Object)),
  isVerified: t.maybe(t.Boolean),
  isDeleted: t.maybe(t.Boolean),
  createdAt: t.maybe(t.Date),
  updatedAt: t.maybe(t.Date)
})

module.exports = compose(cleanData, Product)
