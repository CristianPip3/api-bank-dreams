/**
 * this file will hold all the post use-case for product domain
 */
const { Product } = require('src/domain/product')
/**
 * function for create product.
 */
module.exports = ({ productRepository }) => {
  // code for create a item
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const product = Product(body)
        return productRepository.create(product)
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    create
  }
}
