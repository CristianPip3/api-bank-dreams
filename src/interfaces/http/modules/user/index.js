const container = require('src/container')
const router = require('./router')
const instance = require('./instance')

module.exports = () => {
  const {
    logger,
    response: { Success, SuccessTable, Fail },
    auth
  } = container.cradle
  const app = instance()

  return {
    app,
    router: router({ logger, auth, response: { Success, SuccessTable, Fail }, ...app })
  }
}
