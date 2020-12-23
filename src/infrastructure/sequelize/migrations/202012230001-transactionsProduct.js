'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('transactions_product', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      productId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      commerce: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  },
  down: function (queryInterface) {
    return queryInterface.dropTable('transactions_product')
  }
}
