/**
 * this file will hold all the auth use-case for user domain
 */
const Token = require('src/domain/token')

/**
 * function for auth user by id and password.
 */
module.exports = ({ userRepository, webToken, logger }) => {
  // code for create a item
  const validate = async ({ body }) => {
    const credentials = Token(body)
    const userCredentials = await userRepository.findOne({
      attributes: [
        'id',
        'identity',
        'firstName',
        'password'
      ],
      where: {
        identity: credentials.identity,
        isVerified: true,
        isDeleted: false
      }
    }).catch(error => {
      throw new Error(error)
    })
    const validatePass = userRepository.validatePassword(userCredentials.password)

    if (!validatePass(credentials.password)) {
      logger.error('Error credencial')
      throw new Error('Invalid Credentials')
    }
    delete userCredentials.password
    const signIn = webToken.signIn()
    const token = signIn({ ...userCredentials })
    return { token }
  }

  return {
    validate
  }
}
