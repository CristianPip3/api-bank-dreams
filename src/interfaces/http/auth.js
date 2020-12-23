const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')
/**
 * middleware to check the if auth void
 */

module.exports = ({ config, repository: { userRepository } }) => {
  const params = {
    secretOrKey: config.authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('bearer')
  }

  const strategy = new Strategy(params, (payload, done) => {
    userRepository
      .findMe({
        where: {
          id: payload.id,
          isVerified: true,
          isDeleted: false
        }
      })
      .then(user => {
        done(null, user)
      })
      .catch(error => done(error, null))
  })

  passport.use(strategy)

  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

  return {
    initialize: () => {
      return passport.initialize()
    },
    authenticate: () => {
      return passport.authenticate('jwt')
    }
  }
}
