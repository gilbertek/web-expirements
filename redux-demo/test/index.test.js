import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
}  from 'react-router-dom';
import App from '../src/components/App';

describe('tests application entry point load successfully', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><App /></Router>, div);
  });
});
