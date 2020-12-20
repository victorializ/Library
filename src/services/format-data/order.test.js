import { formatData } from './order';

const data = {
    "bookingId": 3,
    "book": {
        "bookId": 6,
        "name": "1984",
        "bookYear": 1949,
        "numberAvailable": 10,
        "bookGenres": [],
        "bookAuthors": []
    },
    "user": {
        "id": 1,
        "firstName": "Alice",
        "lastName": "Orlova",
        "email": "allie",
        "passwordHash": "hash",
        "passwordSalt": "salt",
        "isBlocked": false,
        "bookings": []
    },
    "isFinished": false, 
    "dateOfReturn": '2019-12-05'
};


describe('order data formating', () => {
    it('it should format order data', () => {
        const expectedData = {
            id: 3,
            bookId: 6,
            name: '1984',
            bookYear: 1949, 
            date: '2019-12-05',
            isFinished: false
        };
        expect(formatData(data)).toEqual(expectedData);
    });
});