const faker = require('faker')
const { range, map, compose } = require('ramda')
const { UUID_PRODUCT } = require('src/infrastructure/constants/uuidSeed')
module.exports = () => {
  const numberTransactionsProduct = range(0, 5)
  const populateTransactionsProduct = compose(
    map(() => ({
      id: faker.random.uuid(),
      productId: UUID_PRODUCT[Math.floor(Math.random() * UUID_PRODUCT.length)],
      commerce: faker.company.companyName(),
      amount: faker.random.number(),
      state: faker.random.word(),
      isVerified: faker.random.boolean(),
      isDeleted: faker.random.boolean(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
  )

  return populateTransactionsProduct(numberTransactionsProduct)
}
