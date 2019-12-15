import { promisify } from '../../utils/utils';

const mockUser = {
    data: {
        id: 1,
        email: 'allie',
        password: '1111',
        firstName: 'Alice',
        lastName: 'Orlova',
        token: 'sssssssssssssshit', 
        isBlocked: false, 
        role: "User"
    }
}

const mockAllUsers = {
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

const mockError = {
    message: 'This is error!'
}

function login(email, password) {
    console.log('login', email, password);
    const err = email !== mockUser.data.email || password !== mockUser.data.password ? mockError : '';
    return promisify(mockUser, err);
}

function register(user) {
    console.log('register', JSON.stringify(user));
    const err = user.email === mockUser.email ? mockError : '';
    return promisify({data: {}}, err);
}

function getAllUsers() {
    console.log('getAllUsers');
    const err = mockUser.role === 'Admin' ? '' : mockError;
    return promisify(mockAllUsers, err);
}

export { login, register, getAllUsers };