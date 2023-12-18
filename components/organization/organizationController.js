const { POST_ORGANIZATION, GET_ORGANIZATION, PATCH_ORGANIZATION } = require('./organizationSchema');
const organizationService = require('./organizationService');


const createOrganization = async (event) => {
    const data = JSON.parse(event.body);
    const params = POST_ORGANIZATION.validate(data).value
    const result = await organizationService.createOrganization(params);
    return { statusCode: 201, body: JSON.stringify(result) }
}

const getAllOrganization = async (event) => {
    const result = await organizationService.getAllOrganization();
    return { statusCode: 200, body: JSON.stringify(result) }
}

const getOrganization = async (event) => {
    const organizationId = event.pathParameters;
    const params = GET_ORGANIZATION.validate(organizationId).value
    const result = await organizationService.getOrganization(params)
    return { statusCode: 200, body: JSON.stringify(result) }
}

const updateOrganization = async (event) => {
    const _id = event.pathParameters;
    const data = JSON.parse(event.body);
    console.log("_id >>>", _id)
    const params = PATCH_ORGANIZATION.validate(data).value
    const result = await organizationService.updateOrganization(_id, params)
    return { statusCode: 200, body: JSON.stringify(result) }

}

module.exports = {
    createOrganization,
    getAllOrganization,
    getOrganization,
    updateOrganization
}