import { login, logout, request, 
    success, failure } from './actions';
import { constants } from './constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const user = {
  data: {
      id: 1,
      email: 'allie',
      password: '1111',
      firstName: 'Alice',
      lastName: 'Orlova',
      token: 'sssssssssssssshit', 
      isBlocked: false
  }
};

describe('actions', () => {
  it('should create an action to login request', () => {
    const { email, password } = user.data;
    const expectedAction = {
        type: constants.LOGIN_REQUEST,
        user: { email, password }
    };
    expect(request({ email, password })).toEqual(expectedAction);
  });
  it('should create an action to login success', () => {
    const { email, password } = user.data;
    const expectedAction = {
        type: constants.LOGIN_SUCCESS,
        user: { email, password }
    };
    expect(success({ email, password })).toEqual(expectedAction);
  });
  it('should create an action to login success', () => {
    const error = 'This is error';
    const expectedAction = {
        type: constants.LOGIN_FAILURE,
        error
    };
    expect(failure(error)).toEqual(expectedAction);
  });
  it('should create an action to logout', () => {
    const expectedAction = {
        type: constants.LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });
  it('should create a login success action when sucessfully logged in', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const { email, password } = user.data;
    const store = mockStore({ user: {}, details: {} })

    const expectedActions = [
      { type: constants.LOGIN_REQUEST, user: { email, password } },
      { type: constants.LOGIN_SUCCESS, user }
    ];

    return store.dispatch(login(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
  it('should create a login failture action when failed to log in', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)

    const { email, password } = user.data;
    const store = mockStore({ user: {}, details: {} })

    const expectedActions = [
      { type: constants.LOGIN_REQUEST, user: { email, password } },
      { type: constants.LOGIN_SUCCESS, user }
    ];

    const incorrectPassword = '2222';
    return store.dispatch(login(email, incorrectPassword)).then(() => {
      expect(store.getActions()).not.toEqual(expectedActions)
    })
  });
});