import { post, get } from './config';

function order(id, bookId) {
    const url = '/Bookings';
    return post(url, {"user" : {id}, "book": {bookId}});
}
 
function getAllOrders(id) {
     const url = `/Account/${id}/GetBookings`;
     return get(url);
}

export { getAllOrders, order };