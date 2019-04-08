import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './store/reducers';
import socket from './sockets'
import { handleLiveData } from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const webS = socket(store.dispatch, )
sagaMiddleware.run(handleLiveData, { webS, dispatch : store.dispatch })
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
