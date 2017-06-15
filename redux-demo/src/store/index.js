import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './../reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export const browserHistory = createBrowserHistory();

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk, logger, routerMiddleware(browserHistory))
  )
);

