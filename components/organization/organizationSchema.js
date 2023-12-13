const joi = require('joi');

const POST_ORGANIZATION = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    city: joi.string().required(),
})

const GET_ORGANIZATION = joi.object({
    organizationId: joi.string().required()
})

const PATCH_ORGANIZATION = joi.object({
    name: joi.string().optional(),
    email: joi.string().email().optional(),
    city: joi.string().optional(),
})

module.exports = {
    POST_ORGANIZATION,
    GET_ORGANIZATION,
    PATCH_ORGANIZATION
}