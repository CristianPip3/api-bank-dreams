const { createContainer, asValue, asFunction } = require('awilix')
// you can do this
const app = require('./app')
const server = require('./interfaces/http/server')
const router = require('./interfaces/http/router')
const config = require('../config')
const logger = require('./infrastructure/logging/logger')
const database = require('./infrastructure/database')
const repository = require('./infrastructure/repositories')
const response = require('./infrastructure/support/response')

// CONTAINER OF ELEMENTS
const container = createContainer()

// SYSTEM
container.register({
  app: asFunction(app).singleton(),
  server: asFunction(server).singleton(),
  router: asFunction(router).singleton(),
  logger: asFunction(logger).singleton(),
  database: asFunction(database).singleton(),
  response: asFunction(response).singleton(),
  config: asValue(config),
  repository: asFunction(repository).singleton()
})

module.exports = container
