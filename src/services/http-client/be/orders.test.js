import { getAllOrders, order, finishOrder, getAllActiveOrders } from './orders';
import * as config from './config';

describe('functions for http requests related to the order entity', () => {
    it('requests all orders', () => {
        config.get = jest.fn();
        const id = 1;
        getAllOrders(id);
        expect(config.get.mock.calls[0][0]).toEqual(`/Account/${id}/GetBookings`);
    });
    it('orders', () => {
        config.post = jest.fn();
        order(1, 1);
        expect(config.post.mock.calls[0][0]).toEqual('/Bookings');
    });
    it('get active orders', () => {
        config.get = jest.fn();
        getAllActiveOrders();
        expect(config.get.mock.calls[0][0]).toEqual('/Bookings/GetAllActive');
    });
    it('finish order', () => {
        config.put = jest.fn();
        const id = 1;
        finishOrder(id);
        expect(config.put.mock.calls[0][0]).toEqual(`/Bookings/${id}/FinishBooking`);
    });
});