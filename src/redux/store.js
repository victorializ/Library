import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { authReducer } from './reducers';

export const store = createStore(
    authReducer,
    applyMiddleware(
        thunkMiddleware, 
        createLogger()
    )
);