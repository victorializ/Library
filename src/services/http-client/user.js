import { post } from './index';
import { promisify } from '../../utils/utils';

const mock = {
    id: 1,
    email: "allie",
    firstName: "Alice",
    lastName: "Orlova",
    token: "sssssssssssssshit"
}

function login(email, password) {
    
    //const url = '/authenticate';
    //return post(url, {})

    //return promisify(mock, 'login error!'); //login with error

    return promisify(mock);
}

function register(firstName, lastName, email, password) {
    
    //const url = '/register';
    //return post(url, {firstName, lastName, email, password});
    
    return promisify({data: {}});
}

export { login, register };