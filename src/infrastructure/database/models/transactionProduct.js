module.exports = function (sequelize, DataTypes) {
  const TransactionProduct = sequelize.define(
    'transactions_product',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      productId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      commerce: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      amount: {
        type: DataTypes.INTEGER,
        defaultValue: ''
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: true
      },
      isVerified: {
        type: DataTypes.INTEGER,
        defaultValue: false
      },
      isDeleted: {
        type: DataTypes.INTEGER,
        defaultValue: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    },
    { underscored: true }
  )
  TransactionProduct.associate = models => {
    TransactionProduct.belongsTo(models.products, {
      foreignKey: 'productId',
      as: 'product'
    })
  }

  return TransactionProduct
}
