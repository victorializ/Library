import { promisify } from '../../../utils/utils';

const mockUser = {
    data: {
        id: 1,
        email: 'allie',
        password: '1111',
        firstName: 'Alice',
        lastName: 'Orlova',
        token: 'sssssssssssssshit', 
        isBlocked: false, 
        role: "Admin"
    }
}

const mockAllUsers = {
    data: [
        {
            "id": 1,
            "firstName": "Alice",
            "lastName": "Orlova",
            "email": "allie",
            "passwordHash": "hasssh",
            "passwordSalt": "salt",
            "isBlocked": false,
            "role": "Customer",
            "bookings": [
                {
                    "bookingId": 3,
                    "book": null,
                    "isFinished": false
                }
            ]
        },
        {
            "id": 3,
            "firstName": "Vika",
            "lastName": "Aliz",
            "email": "allie_orlova",
            "passwordHash": "hash",
            "passwordSalt": "salt",
            "isBlocked": false,
            "role": "Manager",
            "bookings": []
        }
    ]
}

const mockError = {
    message: 'This is error!'
}

function login(email, password) {
    const err = email !== mockUser.data.email || password !== mockUser.data.password ? mockError : '';
    return promisify(mockUser, err);
}

function register(user) {
    const err = user.email === mockUser.email ? mockError : '';
    return promisify({data: {}}, err);
}

function getAllUsers() {
    const err = mockUser.data.role === 'Admin' ? '' : mockError;
    return promisify(mockAllUsers, err);
}

function getCustomers() {
    return promisify(mockAllUsers);
}

function getCustomersAndManagers(){
    return promisify(mockAllUsers);
}

function changeRole(id) {
    return promisify({data: {}});
}

export { 
    login, 
    register, 
    getAllUsers, 
    getCustomers, 
    getCustomersAndManagers, 
    changeRole 
};