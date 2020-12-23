/**
 * this file will hold all the update use-case for user domain
 */
const { User } = require('src/domain/user')

/**
 * function for update user.
 */
module.exports = ({ userRepository }) => {
  // code for update  a item
  const update = ({ id, body }) => {
    return Promise.resolve()
      .then(() => {
        const user = User(body)
        return userRepository.findOne({
          attributes: [
            'id',
            'identity',
            'firstName'
          ],
          where: { id }
        }).then((response) => {
          userRepository.update(user,
            {
              where: { id: response.id }
            }
          )
          return user
        })
      }).catch(error => {
        throw new Error(error)
      })
  }

  return {
    update
  }
}
