import { userReducer, detailsReducer } from './reducers';
import { constants } from './constants';

const initialUser = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: ''
};

const initialDetails = {
    loading: false,
    error: null
};

describe('details reducer', () => {
  it('should return the initial state', () => {
    expect(detailsReducer(undefined, {})).toEqual(initialDetails);
  });
  it('should request login', () => {
    expect(detailsReducer(initialDetails, {
        type: constants.LOGIN_REQUEST
      })).toEqual({error: false, loading: true});
  });
  it('should successfully login', () => {
    expect(detailsReducer(initialDetails, {
        type: constants.LOGIN_SUCCESS
      })).toEqual({error: null, loading: false});
  });
  it('should failure login', () => {
    const error = 'This is error';
    expect(detailsReducer(initialDetails, {
        type: constants.LOGIN_FAILURE,
        error
    })).toEqual({error, loading: false})
  });
});

describe('user reducer', () => {
    it('should return user after login', () => {
        const user = {
            data: {
                userId: 1,
                firstName: 'Name',
                lastName: 'LastName',
                email: 'user@mail.com',
                password: 'Admin1@3',
                token: 'sssssssssssssshit', 
                isBlocked: false
            }
        };
        expect(userReducer(initialUser, {
            type: constants.LOGIN_SUCCESS,
            user
        })).toEqual(user.data);
    });
    it('should remove user after logout', () => {
        const user = {
            data: {
                userId: 1,
                firstName: 'Name',
                lastName: 'LastName',
                email: 'user@mail.com',
                password: 'Admin1@3',
                token: 'sssssssssssssshit', 
                isBlocked: false
            }
        };
        expect(userReducer(user, {
            type: constants.LOGOUT,
            user
        })).toEqual(initialUser);
    });
})
