const organizationModel = require('./organizationModel');

const createOrganization = async (params) => {
    const organization = await organizationModel.createOrganization(params);
    return organization;
}

module.exports = {
    createOrganization
}