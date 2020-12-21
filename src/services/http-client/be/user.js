import { post, get } from './config';

function login(email, password) {
    const url = '/Account/Login';
    return post(url, {email, password})
}

function register(user) {
    const url = '/Account/Register';
    return post(url, {
        ...user, 
        PasswordConfirm: user.reenter
    });
}

export { 
    login, 
    register
};