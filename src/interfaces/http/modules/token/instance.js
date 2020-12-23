const container = require('src/container') // we have to get the DI
const { post } = require('src/app/token')

module.exports = () => {
  const {
    repository: { userRepository },
    jwt,
    logger
  } = container.cradle

  const postUseCase = post({
    userRepository,
    webToken: jwt,
    logger
  })

  return {
    postUseCase
  }
}
