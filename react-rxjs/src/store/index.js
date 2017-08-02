import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import reducers from '../reducers';
import epics from '../reducers/epics';

const epicMiddleware = createEpicMiddleware(epics);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-undef */
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}
/* eslint-enable */

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);

