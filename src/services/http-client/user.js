import { post, get } from './config';

function login(email, password) {
    const url = '/Users/Authenticate';
    return post(url, {email, password})
}

function register(user) {
    const url = '/Register';
    return post(url, {
        ...user, 
        PasswordConfirm: user.reenter
    });
}

function getAllUsers() {
    const url = '/Users';
    return get(url);
}

export { login, register, getAllUsers };