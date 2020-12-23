const { expect, use } = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const updateUseCase = require('src/app/user/put')

use(sinonChai)

describe('App -> User -> Put', () => {
  const body = {
    identity: '1061749',
    firstName: 'test',
    password: 'pass'
  }
  let useCase
  let methodUpdate
  let methodFindOne

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        update: data => data,
        findOne: () => Promise.resolve(body)
      }

      methodFindOne = sinon.spy(MockRepository, 'findOne')
      methodUpdate = sinon.spy(MockRepository, 'update')
      useCase = updateUseCase({
        userRepository: MockRepository
      })
    })

    it('should have called findOne method of userRepository', async () => {
      await useCase.update({ id: 1, body })
      // eslint-disable-next-line
      expect(methodFindOne).to.have.been.called;
    })
    it('should have called delete method of userRepository', async () => {
      await useCase.update({ id: 1, body })
      // eslint-disable-next-line
      expect(methodUpdate).to.have.been.called;
    })
  })

  describe('Fail path', () => {
    beforeEach(() => {
      const MockRepository = {
        // eslint-disable-next-line prefer-promise-reject-errors
        update: () => Promise.reject('Error'),
        // eslint-disable-next-line prefer-promise-reject-errors
        findOne: () => Promise.reject('Error')
      }

      useCase = updateUseCase({
        userRepository: MockRepository
      })
    })

    it('should display error on rejection', async () => {
      let error
      try {
        await useCase.update({ id: 1, body })
      } catch (e) {
        error = e.message
      }
      console.log(error)
      expect(error).to.equal('Error')
    })
  })
})
