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
  const averagePriceTransactionsProduct = (...args) => {
    const itemAttributeSumPrice = [
      model.sequelize.fn('AVG', model.sequelize.col('transactions.amount')), 'avg'
    ]
    args[0].include = [
      {
        model: model.sequelize.models.transactions_product,
        as: 'transactions',
        attributes: []
      }
    ]
    args[0].attributes.push(itemAttributeSumPrice)
    return model.findOne(...args)
      .then(({ dataValues }) => (toEntity(dataValues))).catch(error => {
        throw new Error(error)
      })
  }

  const destroy = (...args) => model.destroy(...args)

  return {
    getAll,
    averagePriceTransactionsProduct,
    create,
    findOne,
    destroy
  }
}
