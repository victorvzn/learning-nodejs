const boom = require('@hapi/boom')

function validatorHandler (schema, property) {
  // Clousure
  return (req, res, next) => {
    // propert === req.body, req.params, req.query
    const data = req[property]

    const { error } = schema.validate(data, { abortEarly: false })

    if (error) {
      next(boom.badRequest(error))
    }

    next()
  }
}

module.exports = validatorHandler
