const joi = require('joi');

const POST_ORGANIZATION = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    city: joi.string().required(),
})

module.exports = {
    POST_ORGANIZATION
}