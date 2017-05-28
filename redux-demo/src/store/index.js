import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './../reducer';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
);

