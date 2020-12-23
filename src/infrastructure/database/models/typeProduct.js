module.exports = function (sequelize, DataTypes) {
  const TypeProduct = sequelize.define(
    'types_product',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
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
  TypeProduct.associate = models => {
    TypeProduct.hasOne(models.products, {
      foreignKey: 'id',
      as: 'product'
    })
  }

  return TypeProduct
}
