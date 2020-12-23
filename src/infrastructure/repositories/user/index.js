const { toEntity } = require('./transform')
const { comparePassword } = require('../../encryption')

module.exports = ({ model }) => {
  const getAll = (...args) =>
    model.findAll(...args).then(entity =>
      entity.map(data => {
        const { dataValues } = data
        return toEntity(dataValues)
      })
    )
  const create = (...args) =>
    model.create(...args)
      .then(({ dataValues }) => toEntity(dataValues)).catch(error => {
        throw new Error(error)
      })

  const update = (...args) =>
    model.update(...args)
      .catch(error => {
        throw new Error(error)
      })

  const findById = (...args) =>
    model
      .findByPk(...args)
      .then(({ dataValues }) => toEntity(dataValues))
      .catch(error => {
        throw new Error(error)
      })
  const getAccountVerified = (...args) => {
    args[0].include = [
      {
        required: false,
        model: model.sequelize.models.products,
        as: 'products',
        attributes: ['name', 'balance'],
        where: {
          isVerified: true,
          isDeleted: false
        },
        include: [
          {
            required: true,
            model: model.sequelize.models.types_product,
            as: 'typeProduct',
            attributes: ['name'],
            where: {
              isVerified: true,
              isDeleted: false
            }
          }
        ]
      }
    ]
    return model.findOne(...args)
      .then(toEntity)
      .catch(error => {
        throw new Error(error)
      })
  }

  const findOne = async (...args) => {
    const result = await model.findOne(...args)
    if (result) {
      return toEntity(result.dataValues)
    } else {
      throw new Error('User Not Found invalid')
    }
  }
  const isExist = (...args) =>
    model.findOne(...args)
      .then(entity => toEntity(entity) !== null)

  const validatePassword = endcodedPassword => password => comparePassword(password, endcodedPassword)

  const destroy = (...args) => model.destroy(...args)

  return {
    getAll,
    getAccountVerified,
    create,
    update,
    findById,
    findOne,
    isExist,
    validatePassword,
    destroy
  }
}
