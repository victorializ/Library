import { constants } from './constants';

const initialState = {
    user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        token: ''
    }, 
    loading: false,
    error: null
};

function isAdmin(user) {
  return user.role === "Admin" || user.role === "Manager";
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return {
        ...initialState,
        loading: true
      };
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...action.user.data,
          isAdmin: isAdmin(action.user.data)
        },
        loading: false,
      };
    case constants.LOGIN_FAILURE:
      return {
          ...state, 
          loading: false, 
          error: action.error
      };
    case constants.LOGOUT:
      return initialState;
    default:
      return state
  }
}

export { authReducer };