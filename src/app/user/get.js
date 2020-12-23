/**
 * this file will hold all the get use-case for user domain
 */

module.exports = ({ userRepository }) => {
/**
 * function for getter all user.
 */
  const all = () => {
    return Promise.resolve()
      .then(() =>
        userRepository.getAll({
          attributes: [
            'id',
            'firstName',
            'isVerified'
          ]
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    all
  }
}
