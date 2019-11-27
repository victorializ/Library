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
    errorMessage: ''
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        user: action.user
      };
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user, 
          token: action.token
        },
        loading: false,
      };
    case constants.LOGIN_FAILURE:
      return {
          ...state, 
          loading: false, 
          errorMessage: action.errorMessage
      };
    case constants.LOGOUT:
      return initialState;
    default:
      return state
  }
}

export { authReducer };