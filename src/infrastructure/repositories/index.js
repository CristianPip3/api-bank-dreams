const User = require('./user')
const Product = require('./product')

module.exports = ({ database }) => {
  const userModel = database.models.users
  const productModel = database.models.products

  return {
    userRepository: User({ model: userModel }),
    productRepository: Product({ model: productModel })
  }
}
