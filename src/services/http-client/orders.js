import { post } from './index';
import { get } from 'http';
import { promisify } from '../../utils/utils';

const mock = {
    data: [
        {
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
                "userId": 1,
                "firstName": "Alice",
                "lastName": "Orlova",
                "email": "allie",
                "passwordHash": "hash",
                "passwordSalt": "salt",
                "isBlocked": false,
                "bookings": []
            },
            "isFinished": false, 
            "date": '2019-12-05'
        },
        {
            "bookingId": 2,
            "book": {
                "bookId": 1,
                "name": "B1",
                "bookYear": 2000,
                "numberAvailable": 1,
                "bookGenres": [
                    {
                        "bookId": 1,
                        "genreId": 2,
                        "genre": {
                            "genreId": 2,
                            "name": "g1"
                        }
                    }
                ],
                "bookAuthors": [
                    {
                        "bookId": 1,
                        "authorId": 3,
                        "author": {
                            "authorId": 3,
                            "firstName": "A1",
                            "lastName": "A1",
                            "bookAuthors": []
                        }
                    }
                ]
            },
            "user": {
                "userId": 1,
                "firstName": "Alice",
                "lastName": "Orlova",
                "email": "allie",
                "passwordHash": "hash",
                "passwordSalt": "salt",
                "isBlocked": false,
                "bookings": []
            },
            "isFinished": false,
            "date": '2019-12-18'
        }, 
        {
            "bookingId": 4,
            "book": {
                "bookId": 2,
                "name": "B2",
                "bookYear": 1999,
                "numberAvailable": 1,
                "bookGenres": [
                    {
                        "bookId": 1,
                        "genreId": 2,
                        "genre": {
                            "genreId": 2,
                            "name": "g1"
                        }
                    }
                ],
                "bookAuthors": [
                    {
                        "bookId": 1,
                        "authorId": 3,
                        "author": {
                            "authorId": 3,
                            "firstName": "A1",
                            "lastName": "A1",
                            "bookAuthors": []
                        }
                    }
                ]
            },
            "user": {
                "userId": 1,
                "firstName": "Alice",
                "lastName": "Orlova",
                "email": "allie",
                "passwordHash": "hash",
                "passwordSalt": "salt",
                "isBlocked": false,
                "bookings": []
            },
            "isFinished": true,
            "date": '2019-12-01'
        }
    ]
}

function order (userId, bookId) {
    // const url = '/Order'; TODO: check urls
    //return post(url, {userId, bookId});
    return promisify({data: {}});
}
 
function getAll (userId) {
     //const url = `/Order/${userId}`;
     //return get(url);
     return promisify(mock);
}

export { getAll, order };
