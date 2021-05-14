const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    'dates': {
        type: {
            'checkIn': {
                type: String,
                required: [true, 'Check-in date is required in order to make a reservation']
            },
            'checkOut': {
                type: String,
                required: [true, 'Check-out date is required in order to make a reservation']
            },
        },
    },
    guests: {
        type: {
            adults: {
                type: Number,
                required: [true, 'At least one adult must be included in the reservation']
            },
            children: {
                type: Number,
            }
        }
    },
    rooms: {
        type: {},
        required: [true, 'At least one kind of room must be selected']
    }
});

module.exports = mongoose.model('Booking', bookingSchema);