const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const Status = require('http-status')
const { Router } = require('express')

module.exports = () => {
  const router = Router()

  // swagger definition
  const swaggerDefinition = {
    info: {
      title: 'Node  API Bank Dreams',
      version: '1.0.0',
      description: 'Available REST Endpoints of Node DDD RESTFULL API'
    },
    host: `${process.env.BASE_URL}:${process.env.PORT}/api/v${process.env.APP_VERSION}`,
    basePath: '/',
    securityDefinitions: {
      Bearer: {
        description: '',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    }
  }

  // options for the swagger docs
  const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['src/interfaces/http/modules/**/*.js']
  }

  // initialize swagger-jsdoc
  const swaggerSpec = swaggerJSDoc(options)
  /**
   * @swagger
   * responses:
   *   Unauthorized:
   *     description: Unauthorized
   *   BadRequest:
   *     description: BadRequest / Invalid Input
   */

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Status
   *     description: Returns API status
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: API Status
   */
  router.get('/', (req, res) => {
    res.status(Status.OK).json({ status: 'API working' })
  })

  router.use('/api-docs', swaggerUi.serve)
  router.get('/api-docs', swaggerUi.setup(swaggerSpec))
  return router
}
