const jwt = require('jsonwebtoken')
const { compose, trim, replace, partialRight } = require('ramda')

module.exports = ({ config }) => ({
  signIn: options => payload => {
    const opt = Object.assign({}, options, { expiresIn: '4h' })
    return jwt.sign(payload, config.authSecret, opt)
  },
  verify: options => token => {
    const opt = Object.assign({}, options)
    return jwt.verify(token, config.authSecret, opt)
  },
  decode: options => token => {
    const opt = Object.assign({}, options)
    const decodeToken = compose(partialRight(jwt.decode, [opt]), trim, replace(/Bearer|bearer/g, ''))

    return decodeToken(token)
  }
})
