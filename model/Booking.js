const mongoose = require("mongoose")
const bookingSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    },
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "items"
    },
    date: {
        type: String,
        required: true
    },
    number_of_travelers: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }

})
const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;