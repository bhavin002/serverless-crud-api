const dynamoose = require('dynamoose');
const { v4: uuidv4 } = require('uuid');
const TABLE_NAMES = require('../../constants/table-names');

const organizationSchema = new dynamoose.Schema({
    _id: {
        type: String,
        hashKey: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const Model = dynamoose.model('Organization', organizationSchema)

const Table = new dynamoose.Table(TABLE_NAMES.ORGANIZATION, [Model], { throughput: 'ON_DEMAND', update: ['throughput'] })

const createOrganization = async (params) => {
    let organization = {
        _id: uuidv4(),
        name: params.name,
        email: params.email,
        city: params.city
    }

    const newOrganization = new Model(organization);
    return await newOrganization.save();
}

module.exports = {
    createOrganization
}