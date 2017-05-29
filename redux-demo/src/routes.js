import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

const Routes = (
  <Route path='/' component={App}>
    <Route path='/' component={HomePage} />
    <Route path='about' component={AboutPage} />
  </Route>
);

export default Routes;
