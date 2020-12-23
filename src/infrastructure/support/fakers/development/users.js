const faker = require('faker')
const { range, map, compose } = require('ramda')
const { encryptPassword } = require('src/infrastructure/encryption')
const { UUID_USERS } = require('src/infrastructure/constants/uuidSeed')

module.exports = () => {
  const password = encryptPassword('pass')
  const numberUsers = range(0, UUID_USERS.length)
  const populateUser = compose(
    map((index) => ({
      id: UUID_USERS[index],
      firstName: faker.name.firstName(),
      password: password,
      isVerified: faker.random.boolean(),
      isDeleted: faker.random.boolean()
    }))
  )

  return populateUser(numberUsers)
}
