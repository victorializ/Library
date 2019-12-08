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


export { login, register };