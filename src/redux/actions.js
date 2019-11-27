import { constants } from './constants';
import { login as httpLogin } from '../services/http-client/user';

function login(email, password) {
    return dispatch => {
        dispatch(request({email, password}));

        httpLogin(email, password)
            .then(
                res => { 
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: constants.LOGIN_REQUEST, user } }
    function success(user) { return { type: constants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: constants.LOGIN_FAILURE, error } }
}

function logout() {
    return { type: constants.LOGOUT };
}

export { login, logout };