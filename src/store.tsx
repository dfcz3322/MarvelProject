import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import marvelAppState from './reducer';
import marvelSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(marvelAppState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(marvelSaga);
