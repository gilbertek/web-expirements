import React from 'React';
import ReactDOM from 'react-dom';
import { Container } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App';
import routes from './routes';
import store from './store';

const history = syncHistoryWithStore(createBrowserHistory(), store);

store.dispatch(() => {});

const root = document.getElementById('app-container');

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes}>
        <Component />
      </Router>
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
