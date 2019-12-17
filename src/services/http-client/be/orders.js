import { post, get } from './config';

function order(id, bookId) {
    const url = '/Bookings';
    return post(url, {"user" : {id}, "book": {bookId}});
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
    return get(url);
}

export { getAllOrders, order, finishOrder, getAllActiveOrders };