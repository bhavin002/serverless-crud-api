const organizationModel = require('./organizationModel');

const createOrganization = async (params) => {
    const organization = await organizationModel.createOrganization(params);
    return organization;
}

const getAllOrganization = async () => {
    const organization = await organizationModel.getAllOrganization();
    return organization;
}

const getOrganization = async (params) => {
    const organization = await organizationModel.getOrganization(params);
    return organization;
}

const updateOrganization = async (_id,params) => {
    const organization = await organizationModel.getOrganization(_id);
    if (!organization) {
        return {
            statusCode: 404, body: JSON.stringify({ message: 'No data found' })
        }
    }
    console.log("organization >>>", organization)
    const updatedOrganization = await organizationModel.updateOrganization(organization._id, params)
    return updatedOrganization;

}

module.exports = {
    createOrganization,
    getAllOrganization,
    getOrganization,
    updateOrganization
}