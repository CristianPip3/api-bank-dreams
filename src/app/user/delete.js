/**
 * this file will hold all the remove use-case for user domain
 */
module.exports = ({ userRepository }) => {
  // code for delete logic a item
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
            isDeleted: true
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
