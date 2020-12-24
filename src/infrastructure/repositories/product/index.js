const { toEntity } = require('./transform')

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

  const findOne = async (...args) => {
    const result = await model.findOne(...args)
    if (result) {
      return toEntity(result.dataValues)
    } else {
      throw new Error('User Not Found invalid')
    }
  }

  const destroy = (...args) => model.destroy(...args)

  return {
    getAll,
    create,
    findOne,
    destroy
  }
}
