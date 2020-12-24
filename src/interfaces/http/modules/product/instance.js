const container = require('src/container') // we have to get the DI
const { get, post } = require('src/app/product')

module.exports = () => {
  const {
    repository: { productRepository }
  } = container.cradle

  const getUseCase = get({ productRepository })
  const postUseCase = post({ productRepository })

  return {
    getUseCase,
    postUseCase
  }
}
