const { assoc } = require('ramda')

module.exports = ({ config }) => {
  const defaultResponse = (success = true) => {
    return {
      success,
      version: config.version
    }
  }
  const Success = data => {
    return data
  }
  const Fail = (data) => {
    return assoc(
      'error',
      data,
      defaultResponse(false)
    )
  }

  return {
    Success,
    Fail
  }
}
