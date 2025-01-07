const Booking = require('../model/Booking')
const findAll = async (req, res) => {
    try {
        const bookings = await Booking.find().populate(["customerId", "packageId",]);
        res.status(200).json(bookings);
    } catch (e) {
        res.json(e)
    }



}
const save = async (req, res) => {
    try {
        const bookings = new Booking(req.body);
        await bookings.save();
        res.status(201).json(bookings)
    } catch (e) {
        res.json(e)
    }

}


module.exports = {
    findAll,
    save
}