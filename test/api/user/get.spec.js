/* eslint-env mocha */

const { userRepository } = app.resolve('repository')

describe('Routes: GET UsersEntity', () => {
  const BASE_URI = `/api/v${config.version}`
  beforeEach(done => {
    // we need to add user before we can request our token
    userRepository
      .destroy({ where: {} })
      .then(() =>
        userRepository.create({
          identity: '789fe084-a557-40ac-886e-7c2485cf9b2c',
          firstName: 'Test',
          password: 'pass'
        })
      )
      .then(() =>
        userRepository.create({
          identity: '889fe084-a557-40ac-886e-7c2485cf9b2c',
          firstName: 'John',
          password: 'pass'
        })
      )
      .then(() =>
        done()
      )
  })

  describe('Should return users', () => {
    it('should return all users', done => {
      request
        .get(`${BASE_URI}/users`)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.length(2)
          done(err)
        })
    })
  })
})
