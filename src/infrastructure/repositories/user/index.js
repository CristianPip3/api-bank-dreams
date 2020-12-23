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

  const findOne = async (...args) => {
    const result = await model.findOne(...args)
    if (result) {
      return toEntity(result.dataValues)
    } else {
      throw new Error('User Not Found invalid')
    }
  }
  const findMe = async (...args) => {
    const result = await model.findOne(...args)
    if (result) {
      return toEntity(result.dataValues)
    } else {
      throw new Error('User Not Found invalid')
    }
  }
  const isExist = (...args) =>
    model.findOne(...args)
      .then(entity => entity !== null)

  const validatePassword = endcodedPassword => password => comparePassword(password, endcodedPassword)

  const destroy = (...args) => model.destroy(...args)

  return {
    getAll,
    create,
    update,
    findById,
    findOne,
    findMe,
    isExist,
    validatePassword,
    destroy
  }
}
