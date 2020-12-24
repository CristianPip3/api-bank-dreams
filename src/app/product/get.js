/**
 * this file will hold all the get use-case for product domain
 */

module.exports = ({ productRepository }) => {
  /**
   * function for getter all product.
   */
  const all = () => {
    return Promise.resolve()
      .then(() =>
        productRepository.getAll({
          attributes: [
            'id',
            'name'
          ],
          include: ['typeProduct', 'transactions']
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }
  /**
   * function for getter product by Id.
   */
  const getById = (req) => {
    return Promise.resolve()
      .then(() => {
        const id = req.params.id
        const userId = req.user.id
        if (!id) {
          throw new Error('Id required')
        }
        console.log(id)
        return productRepository.findOne({
          attributes: [
            'id',
            'name'
          ],
          include: ['typeProduct', 'transactions'],
          where: {
            id,
            userId
          }
        })
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  /**
   * function for getter  average product by Id.
   */
  const getAvgTransactions = async (req) => {
    const id = req.params.id
    const userId = req.user.id
    if (!id) {
      throw new Error('Id required')
    }
    return productRepository.averagePriceTransactionsProduct({
      attributes: [
        'id',
        'name'
      ],
      where: {
        id,
        userId
      },
      group: ['products.id']
    })
  }

  return {
    all,
    getAvgTransactions,
    getById
  }
}
