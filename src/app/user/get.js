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
  const allProducts = () => {
    return Promise.resolve()
      .then(() =>
        userRepository.getAll({
          attributes: [
            'identity',
            'firstName',
            'isVerified'
          ],
          include: ['products']
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    all,
    allProducts
  }
}
