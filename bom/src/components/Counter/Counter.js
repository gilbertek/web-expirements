import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementer = amount => () => {
    this.setState(prevState => ({
      count: prevState.count + amount
    }));
  };

  increment = this.incrementer(1);
  decrement = this.incrementer(-1);

  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>

        <button className="increment" onClick={this.increment}>
          +++
        </button>
        <button className="decrement" onClick={this.decrement}>
          ---
        </button>
      </div>
    );
  }
}

Counter.propTypes = {};

export default Counter;
