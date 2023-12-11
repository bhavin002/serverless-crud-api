const organizationModel = require('./organizationModel');

const createOrganization = async (params) => {
    const organization = await organizationModel.addOrganization(params);
    return organization;
}

module.exports = {
    createOrganization
}