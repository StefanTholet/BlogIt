import { sendRequest } from './server';
const today = `${new Date().getMonth() + 1}-${new Date().getDate() + 1}-${new Date().getFullYear()}`;
const postRequest = ['POST', 'application/json'];
function getBookingData(event) {
    event.preventDefault();
    const formData = [...event.target].map(input => input.value)
    return JSON.stringify({
        dates: {
            'checkIn': formData[0],
            'checkOut': formData[1],
        },
        guests: {
            'adults': formData[2],
            'children': formData[3],
        },
        rooms: {
            single: formData[4],
            double: formData[5],
            triple: formData[6],
        },
    })
}

function reservation(event, userId) {
    return sendRequest(`/users/${userId}/bookings/add`,
        getBookingData(event), postRequest)
}

function uploadEditedBooking(updatedBookingDetails, userId, bookingId) {
    return sendRequest(`/users/${userId}/bookings/${bookingId}/edit`
        , JSON.stringify(updatedBookingDetails),
        postRequest)
        .catch(err => console.log(err))
}

export {
    today,
    reservation,
    uploadEditedBooking
}