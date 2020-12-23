const faker = require('faker')
const { range, map, compose } = require('ramda')
const { UUID_TYPES_PRODUCT } = require('src/infrastructure/constants/uuidSeed')
module.exports = () => {
  const numberTypeProduct = range(0, 3)
  const populateTypeProduct = compose(
    map((index) => ({
      id: UUID_TYPES_PRODUCT[index],
      name: faker.name.title(),
      isVerified: faker.random.boolean(),
      isDeleted: faker.random.boolean(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
  )

  return populateTypeProduct(numberTypeProduct)
}
