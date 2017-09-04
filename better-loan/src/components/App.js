import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    return (
      <div className="wrapper">
        <p>Hello World!</p>
      </div>
    );
  }
}

export default App;
