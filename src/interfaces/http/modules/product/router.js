const Status = require('http-status')
const { Router } = require('express')

module.exports = ({
  getUseCase,
  postUseCase,
  logger,
  auth,
  response: { Success, Fail }
}) => {
  const router = Router()

  /**
   * @swagger
   * definitions:
   *   product:
   *     properties:
   *       id:
   *         type: string
   *         format: uuid
   *       userId:
   *          type: string
   *       typeProductId:
   *         type: string
   *       typeProduct:
   *          type: string
   *       name:
   *          type: string
   *       balance:
   *            type: number
   *       isVerified:
   *         type: boolean
   *       isDeleted:
   *         type: boolean
   */

  router.use(auth.authenticate())

  /**
   * @swagger
   * /products:
   *   get:
   *     tags:
   *       - Products
   *     description: Returns product by id with transactions
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: Product's ID to get
   *         type: string
   *     responses:
   *       200:
   *         description: One product with array transactions(optional)
   *         schema:
   *           $ref: '#/definitions/product'
   *           items:
   *             $ref: '#/definitions/product'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.get('/:id', (req, res) => {
    getUseCase
      .getById(req)
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch(error => {
        logger.error(error) // we still need to log every error for debugging
        res.status(Status.BAD_REQUEST).json(Fail(error.message))
      })
  })
  return router
}
