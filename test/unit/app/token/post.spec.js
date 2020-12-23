const { expect } = require('chai')
const postUseCase = require('src/app/token/post')

describe('App -> Token -> Post', () => {
  let useCase
  const body = {
    identity: '789fe084-a557-40ac-886e-7c2485cf9b2c',
    password: 'pass'
  }
  const mokResponse = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4OWZlMDg0LWE1NTctNDBhYy04ODZlLTdjMjQ4NWNmOWIyYyIsImZpcnN0TmFtZSI6IkdlcmRhIiwiaWF0IjoxNjA4NzUyNzU5LCJleHAiOjE2MDg3NjcxNTl9.niRvjgtBVkb0ts04lm5F-b27C5c9oqgssJkKNxO3Axw'
  }

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        findOne: () => Promise.resolve(body),
        validatePassword: () => () => (endCode, pass) => (endCode + pass)
      }
      const MockWebToken = {
        signIn: () => () => (mokResponse.token)
      }

      useCase = postUseCase({
        userRepository: MockRepository,
        webToken: MockWebToken
      })
    })

    it('should generate one token the data and append the default password', async () => {
      const body = {
        identity: '789fe084-a557-40ac-886e-7c2485cf9b2c',
        password: 'pass'
      }
      const objUser = await useCase.validate({ body })
      expect(objUser.token).to.equal(mokResponse.token)
    })
  })

  describe('Fail path', () => {
    const body = {
      identity: '889fe084-a557-40ac-886e-7c2485cf9b2c',
      password: 'pass123'
    }
    beforeEach(() => {
      const MockRepository = {
        // eslint-disable-next-line prefer-promise-reject-errors
        findOne: () => Promise.reject('Error'),
        validatePassword: () => () => (endCode, pass) => (endCode + pass)
      }

      useCase = postUseCase({
        userRepository: MockRepository
      })
    })

    it('should display error on rejection', async () => {
      let error
      try {
        await useCase.validate({ body })
      } catch (e) {
        error = e.message
      }
      expect(error).to.equal('Error')
    })
  })
})
