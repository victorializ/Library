import { post } from './index';
import { promisify } from '../../utils/utils';

const mock = {
    id: 1,
    email: 'allie',
    password: '1111',
    firstName: 'Alice',
    lastName: 'Orlova',
    token: 'sssssssssssssshit'
}

const error = {
    message: 'This is error!'
}

function login(email, password) {
    
    //const url = '/authenticate';
    //return post(url, {})

    //return promisify(mock, 'login error!'); //login with error
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