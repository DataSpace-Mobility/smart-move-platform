const mongoose = require('mongoose');

const cityDataSchema = mongoose.Schema({
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