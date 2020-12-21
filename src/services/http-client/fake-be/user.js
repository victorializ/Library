import { promisify } from '../../../utils/utils';

const user = {
    data: {
        userId: 1,
        firstName: 'Name',
        lastName: 'LastName',
        email: 'user@mail.com',
        password: 'Admin1@3',
        token: 'sssssssssssssshit', 
        isBlocked: false
    }
}

const error = {
    message: 'This is error!'
}

function login(email, password) {
    const err = email !== user.data.email || password !== user.data.password ? error : '';
    return promisify(user, err);
}

function register(newUser) {
    const err = newUser.email === user.email ? error : '';
    return promisify({data: {}}, err);
}

export { 
    login, 
    register
};