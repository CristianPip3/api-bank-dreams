/**
 * function for getter user.
 */
module.exports = ({ userRepository }) => {
  // code for delete a item
  const remove = ({ id }) => {
    return Promise.resolve()
      .then(() =>
        userRepository.findOne({
          attributes: [
            'id',
            'firstName'
          ],
          where: { id }
        }).then((response) =>
          userRepository.update({
            isDeleted: 1
          },
          {
            where: { id: response.id }
          }
          )
        )
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    remove
  }
}
