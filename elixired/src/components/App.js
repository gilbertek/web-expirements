import React, { Component } from 'React';
import {
  Route,
  Switch
} from 'react-router-dom';
import propTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <h1>Elixir Red</h1>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: propTypes.object
};
export default App;
