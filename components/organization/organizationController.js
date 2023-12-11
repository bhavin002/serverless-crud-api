const { POST_ORGANIZATION } = require('./organizationSchema');
const organizationService = require('./organizationService');


const createOrganization = async (event) => {
    const { name, email, city } = JSON.parse(event.body);
    const validOrganization = POST_ORGANIZATION.validate({ name, email, city })
    const data = await organizationService.createOrganization(validOrganization);
    return { statusCode: 201, body: JSON.stringify(data) }
}

module.exports = {
    createOrganization
}