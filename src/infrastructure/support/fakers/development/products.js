const faker = require('faker')
const { range, map, compose } = require('ramda')
const { UUID_USERS, UUID_TYPES_PRODUCT, UUID_PRODUCT } = require('src/infrastructure/constants/uuidSeed')
module.exports = () => {
  const numberProduct = range(0, 5)
  const populateProduct = compose(
    map((index) => ({
      id: UUID_PRODUCT[index],
      userId: UUID_USERS[Math.floor(Math.random() * UUID_USERS.length)],
      typeProductId: UUID_TYPES_PRODUCT[Math.floor(Math.random() * UUID_TYPES_PRODUCT.length)],
      name: faker.name.title(),
      balance: faker.random.number(),
      isVerified: faker.random.boolean(),
      isDeleted: faker.random.boolean(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
  )

  return populateProduct(numberProduct)
}
