const Faker = require('src/infrastructure/support/fakers')

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('products', Faker('products'), {})
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('products', null, {})
  }
}
