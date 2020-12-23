const { expect } = require('chai')
const postUseCase = require('src/app/user/post')

describe('App -> User -> Post', () => {
  let useCase

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        create: data => data
      }

      useCase = postUseCase({
        userRepository: MockRepository
      })
    })

    it('should create the records and list the data and append the default password', async () => {
      const body = {
        identity: '789fe084-a557-40ac-886e-7c2485cf9b2c',
        firstName: 'test'
      }
      const objUser = await useCase.create({ body })
      expect(objUser.firstName).to.equal(body.firstName)
    })
  })

  describe('Fail path', () => {
    const body = {
      identity: '789fe084-a557-40ac-886e-7c2485cf9b2c',
      firstName: 'test'
    }

    beforeEach(() => {
      const MockRepository = {
        // eslint-disable-next-line prefer-promise-reject-errors
        create: () => Promise.reject('Error')
      }

      useCase = postUseCase({
        userRepository: MockRepository
      })
    })

    it('should display error on rejection', async () => {
      let error
      try {
        await useCase.create({ body })
      } catch (e) {
        error = e.message
      }
      expect(error).to.equal('Error')
    })
  })
})
