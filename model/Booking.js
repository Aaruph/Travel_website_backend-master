const mongoose = require("mongoose")
const bookingSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "items"
    },
    date: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

})
const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;