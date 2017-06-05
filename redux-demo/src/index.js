import React from 'React';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App';
import store from './store';
import { loadCourses } from './reducer/courses/actions';
import '../public/css/styles.css';

syncHistoryWithStore(createBrowserHistory(), store);

store.dispatch(
  loadCourses()
);

const root = document.getElementById('app-container');

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    root
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
