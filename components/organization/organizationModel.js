const dynamoose = require('dynamoose');
import { v4 as uuidv4 } from 'uuid';

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