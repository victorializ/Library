import { combineReducers } from 'redux';

import { constants } from './constants';
import { reducerFactory } from '../utils/utils';

const initialState = {
    user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        token: ''
    },
    details: { 
      loading: false,
      error: null
    }
};

function detailsHandlers(state, {error}) {
  return {
    [constants.LOGIN_REQUEST]: () => ({
      error: false,
      loading: true
    }), 
    [constants.LOGIN_SUCCESS]: () => ({
      ...state,
      loading: false
    }), 
    [constants.LOGIN_FAILURE]: () => ({
      error,
      loading: false
    })
  }
}

function userHandlers(state, {user}) {
  return {
    [constants.LOGIN_SUCCESS]: () => {
      const role = user.data.role;
      return {
        ...user.data,
        isAdmin: role === "Admin" || 
          role === "Manager"
      }
    }, 
    [constants.LOGOUT]: () => initialState.user,
  }
}

const detailsReducer = reducerFactory(initialState.details, detailsHandlers);

const userReducer = reducerFactory(initialState.user, userHandlers);

const authReducer = combineReducers({
  user: userReducer, 
  details: detailsReducer
});

export { authReducer };