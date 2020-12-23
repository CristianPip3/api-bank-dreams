/* eslint-env mocha */
const { userRepository } = app.resolve('repository')
describe('Routes: GET UsersEntity', () => {
  const BASE_URI = `/api/v${config.version}`
  const signIn = app.resolve('jwt').signIn()
  let token
  beforeEach(done => {
    // we need to add user before we can request our token
    userRepository
      .destroy({ where: {} })
      .then(() =>
        userRepository.create({
          identity: '789fe084-a557-40ac-886e-7c2485cf9b2c',
          firstName: 'Test',
          password: 'pass',
          isVerified: true,
          isDeleted: false
        })
      )
      .then(() =>
        userRepository.create({
          identity: '889fe084-a557-40ac-886e-7c2485cf9b2c',
          firstName: 'John',
          password: 'pass',
          isVerified: true,
          isDeleted: false
        })
      )
      .then((user) => {
        token = signIn({
          id: user.id,
          identity: user.identity,
          firstName: user.firstName
        })
        done()
      })
  })

  describe('Should return users', () => {
    it('should return all users', done => {
      request
        .get(`${BASE_URI}/users`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.length(2)
          done(err)
        })
    })
    it('should return unauthorized if no token', (done) => {
      request.get(`${BASE_URI}/users`)
        .expect(401)
        .end((err, res) => {
          expect(res.text).to.equals('Unauthorized')
          done(err)
        })
    })
  })
})
