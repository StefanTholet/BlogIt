const Booking = require('../DB/models/Booking');

function create(details) {
    let booking = new Booking(details);
    return booking.save();
}

module.exports = {
    create
}