const mongoose = require('mongoose');

const cityDataSchema = mongoose.Schema({
    OrganizationType: {
        type: String,
        default: ''
    },
    OrganizationName: {
        type: String,
        default: ''
    },
    City: {
        type: String,
        default: ''
    },
    Email: {
        type: String,
        default: ''
    },
    Phone: {
        type: String,
        default: ''
    },
    Poc: {
        type: String,
        default: ''
    },
    datasets: {
        type: Array,
        default: []
    }


}, { timestamps: true })


const CityData = mongoose.model('CityData', cityDataSchema);

module.exports = { CityData }