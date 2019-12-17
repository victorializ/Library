import { post, get } from './config';

function order(userId, bookId) {
    const url = '/Bookings';
    return post(url, {"user" : {userId}, "book": {bookId}});
}
 
function getAllOrders(userId) {
     const url = `/Account/${userId}/GetBookings`;
     return get(url);
}

export { getAllOrders, order };