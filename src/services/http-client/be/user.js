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

function getAllUsers() {
    const url = '/Account';
    return get(url);
}

function getCustomers() {
    const url = '/Account/GetCustomers';
    return get(url);
}

function getCustomersAndManagers(){
    const url = '/Account/GetCustomersAndManagers';
    return get(url);
}

export { 
    login, 
    register, 
    getAllUsers, 
    getCustomers, 
    getCustomersAndManagers 
};