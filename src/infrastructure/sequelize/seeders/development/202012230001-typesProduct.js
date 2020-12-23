const Faker = require('src/infrastructure/support/fakers')

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('types_product', Faker('typesProduct'), {})
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('types_product', null, {})
  }
}
