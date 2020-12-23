const { expect, use } = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const deleteUseCase = require('src/app/user/delete')

use(sinonChai)

describe('App -> User -> Delete', () => {
  const body = {
    identity: '1061749',
    firstName: 'test'
  }
  let methodDestroy
  let methodFindOne
  let useCase

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        update: data => data,
        findOne: () => Promise.resolve(body)
      }

      methodFindOne = sinon.spy(MockRepository, 'findOne')
      methodDestroy = sinon.spy(MockRepository, 'update')
      useCase = deleteUseCase({
        userRepository: MockRepository
      })
    })

    it('should have called findOne method of userRepository', async () => {
      await useCase.remove({ id: 1 })
      // eslint-disable-next-line
      expect(methodFindOne).to.have.been.called;
    })
    it('should have called delete method of userRepository', async () => {
      await useCase.remove({ id: 1 })
      // eslint-disable-next-line
      expect(methodDestroy).to.have.been.called;
    })
  })

  describe('Fail path', () => {
    beforeEach(() => {
      const MockRepository = {
        // eslint-disable-next-line prefer-promise-reject-errors
        update: () => Promise.reject('Error'),
        findOne: () => Promise.resolve(body)
      }
      useCase = deleteUseCase({
        userRepository: MockRepository
      })
    })

    it('should display error on rejection', async () => {
      let error
      try {
        await useCase.remove({ id: 1 })
      } catch (e) {
        error = e.message
      }
      expect(error).to.equal('Error')
    })
  })
})
