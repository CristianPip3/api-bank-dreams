const { encryptPassword } = require('../../encryption')

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      identity: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING,
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
      hooks: {
        beforeCreate: user => {
          user.password = encryptPassword(user.password)
        }
      },
      freezeTableName: true,
      timestamps: false
    },
    { underscored: true }
  )
  User.associate = models => {
    User.hasMany(models.products, {
      foreignKey: 'userId',
      as: 'products'
    })
  }

  return User
}
