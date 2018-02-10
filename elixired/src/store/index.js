import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

export const browserHistory = createBrowserHistory();
const routeMiddleware = routerMiddleware(browserHistory);
const middleware = [thunk, routeMiddleware];

/* eslint-disable no-undef */
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}
/* eslint-enable */

export default createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ?
      window.devToolsExtension() : f => f,
  ),
);
