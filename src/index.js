import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {  ErrorBoundary } from './components';

import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>
, document.getElementById('root'));