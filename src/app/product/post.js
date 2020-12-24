/**
 * this file will hold all the post use-case for product domain
 */
const { Product } = require('src/domain/product')
/**
 * function for create product.
 */
module.exports = ({ productRepository }) => {
  // code for create a item
  const create = async ({ body }) => {
    const product = Product(body)
    return productRepository.create(product)
  }

  return {
    create
  }
}
