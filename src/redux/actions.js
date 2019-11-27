import { constants } from './constants';
import { login as httpLogin } from '../services/http-client/user';

function login(email, password) {
    return dispatch => {
        dispatch(request({email, password}));

        httpLogin(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: constants.LOGIN_REQUEST, user } }
    function success(user) { return { type: constants.LOGIN_SUCCESS, user } }
    function failure(errorMessage) { return { type: constants.LOGIN_FAILURE, errorMessage } }
}

function logout() {
    return { type: constants.LOGOUT };
}

export { login, logout };