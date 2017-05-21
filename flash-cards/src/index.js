import React from 'React';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import logger from 'redux-logger';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';

reducer.routing = routerReducer;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
  composeEnhancers(applyMiddleware(thunk, logger),
));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
});

store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'second front',
    back: 'second back'
  }
});

const root = document.getElementById('app-container');

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    root
  )
}

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
