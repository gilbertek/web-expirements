import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

import App from './components/App';
