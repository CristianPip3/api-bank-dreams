const Faker = require('src/infrastructure/support/fakers')

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('transactions_product', Faker('transactionsProduct'), {})
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('transactions_product', null, {})
  }
}
