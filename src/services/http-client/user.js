import { post } from './index';
import { get } from 'http';
import { promisify } from '../../utils/utils';

const mock = {
    id: 1,
    email: 'allie',
    password: '1111',
    firstName: 'Alice',
    lastName: 'Orlova',
    token: 'sssssssssssssshit', 
    isBlocked: false, 
    isAdmin: true
}

const mockAll = {
    data: [
        {
            "userId": 1,
            "firstName": "Alice",
            "lastName": "Orlova",
            "email": "allie",
            "passwordHash": "hasssh",
            "passwordSalt": "salt",
            "isBlocked": false,
            "bookings": [
                {
                    "bookingId": 3,
                    "book": null,
                    "isFinished": false
                }
            ]
        },
        {
            "userId": 3,
            "firstName": "Vika",
            "lastName": "Aliz",
            "email": "allie_orlova",
            "passwordHash": "hash",
            "passwordSalt": "salt",
            "isBlocked": false,
            "bookings": []
        }
    ]
}

const error = {
    message: 'This is error!'
}

function login(email, password) {
    
    //const url = '/authenticate';
    //return post(url, {})

    const err = email !== mock.email || password !== mock.password ? error : '';
    return promisify(mock, err);
}

function register(user) {
    //const url = '/register';
    //return post(url, user);
    const err = user.email === mock.email ? error : '';
    return promisify({data: {}}, err);
}

function getAll() {
    //const url = '/User';
    //return get(url);
    const err = mock.isAdmin ? '' : error;
    return promisify(mockAll, err);
}


export { login, register, getAll };