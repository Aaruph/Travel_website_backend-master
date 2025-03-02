
const express = require("express")

const { cancelBooking, createBooking, getAllBookings, getBookingById  } = require("../controllers/BookingController");
const router = express.Router();

router.post("/", createBooking); // Create booking
router.get("/", getAllBookings); // Get all bookings
router.get("/:id", getBookingById); // Get a specific booking by ID
router.put("/:id/cancel", cancelBooking); // Cancel a booking
module.exports = router;
