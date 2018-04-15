import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Most styling will be done using styled-components but here we'll
// define some global reset and base styles using straight up CSS
import './styles/main.scss';

ReactDOM.render(<App />, document.getElementById('app-container'));

// Start a service worker... helps with caching and offline ability
registerServiceWorker();
