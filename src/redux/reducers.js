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
        user: action.user,
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