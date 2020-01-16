import { post, get, put } from './config';

function order(userId, bookId) {
    const url = '/Bookings';
    return post(url, {"user" : {userId}, "book": {bookId}});
}
 
function getAllOrders(id) {
     const url = `/Account/${id}/GetBookings`;
     return get(url);
}

function getAllActiveOrders() {
    const url = `/Bookings/GetAllActive`; //TODO: clerify urls
    return get(url);
}

function finishOrder(id) {
    const url = `/Bookings/${id}/FinishBooking`; //TODO: clerify urls
    return put(url);
}

export { getAllOrders, order, finishOrder, getAllActiveOrders };