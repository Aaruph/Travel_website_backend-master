const mongoose = require("mongoose")
const packageSchema = new mongoose.Schema({
    package_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    duration: {
        type: Number,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departure_date: {
        type: Date,
        required: true
    },
    return_date: {
        type: Date,
        required: true
    },
    availavility: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }


})
const Package = mongoose.model("packages", packageSchema);

module.exports = Package