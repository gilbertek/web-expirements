import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./../reducer";
import { createStore, applyMiddleware, compose } from "redux";
import createBrowserHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

export const browserHistory = createBrowserHistory();
const routeMiddleware = routerMiddleware(browserHistory);
const middleware = [thunk, routeMiddleware];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-undef */
if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}
/* eslint-enable */

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);
