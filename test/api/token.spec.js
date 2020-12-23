/* eslint-env mocha */
const { userRepository } = app.resolve('repository')

describe('Routes: Login', () => {
  const BASE_URI = `/api/v${config.version}`
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
      .then(() => done())
  })

  describe('POST Token', () => {
    it('should retrieved token', done => {
      request
        .post(`${BASE_URI}/auth/signin`)
        .send({
          identity: '789fe084-a557-40ac-886e-7c2485cf9b2c',
          password: 'pass'
        })
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.include.keys('token')
          done(err)
        })
    })

    it('should throw error if id not existing', done => {
      request
        .post(`${BASE_URI}/auth/signin`)
        .send({
          id: '889fe084-a557-40ac-886e-7c2485cf9b2c',
          password: 'pass'
        })
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.include.keys('error')
          done(err)
        })
    })

    it('should throw error if password incorrect', done => {
      request
        .post(`${BASE_URI}/auth/signin`)
        .send({
          identity: '789fe084-a557-40ac-886e-7c2485cf9b2c',
          password: 'pass123'
        })
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.include.keys('error')
          expect(res.body.error).to.equal('Invalid Credentials')
          done(err)
        })
    })
  })
})
