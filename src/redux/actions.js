import { constants } from './constants';
import { login as httpLogin } from '../services/http-client';

const request = user => ({ type: constants.LOGIN_REQUEST, user });
const success = user => ({ type: constants.LOGIN_SUCCESS, user });
const failure = error => ({ type: constants.LOGIN_FAILURE, error });
const logout = () => ({ type: constants.LOGOUT });

function login(email, password) {
    return dispatch => {
        dispatch(request({email, password}));

        httpLogin(email, password)
            .then(
                (user) => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };
}

export { login, logout };