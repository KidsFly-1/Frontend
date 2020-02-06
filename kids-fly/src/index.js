import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import history from "./history";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers/index';
import App from './App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
 <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
</Provider>,
document.getElementById('root'));
