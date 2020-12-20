import { promisify } from '../../../utils/utils';

const user = {
    data: {
        id: 1,
        email: 'allie',
        password: '1111',
        firstName: 'Alice',
        lastName: 'Orlova',
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