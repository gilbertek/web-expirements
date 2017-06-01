import React from 'React';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import store from './store';

syncHistoryWithStore(createBrowserHistory(), store);

store.dispatch(() => {});

const root = document.getElementById('app-container');

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <Component />
      </Provider>
    </Router>,
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
