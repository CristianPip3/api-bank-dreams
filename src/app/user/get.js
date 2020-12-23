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
            'identity',
            'firstName',
            'isVerified'
          ]
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }
  const getAccountUser = (req) => {
    return Promise.resolve()
      .then(() =>
        userRepository.getAccountVerified({
          attributes: [
            'identity',
            'firstName'
          ],
          where: {
            id: req.user.id
          }
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    all,
    getAccountUser
  }
}
