module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define(
    'products',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      typeProductId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    },
    { underscored: true }
  )
  Product.associate = models => {
    Product.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'user'
    })
    Product.hasMany(models.transactions_product, {
      foreignKey: 'productId',
      as: 'transactions'
    })
    Product.belongsTo(models.types_product, {
      foreignKey: 'typeProductId',
      as: 'typeProduct'
    })
  }
  return Product
}
