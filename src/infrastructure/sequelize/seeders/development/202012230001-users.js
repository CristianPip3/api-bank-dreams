const Faker = require('src/infrastructure/support/fakers')

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('users', Faker('users'), {})
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('users', null, {})
  }
}
