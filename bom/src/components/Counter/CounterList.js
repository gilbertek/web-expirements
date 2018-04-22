import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const createRange = num => Array.from(Array(num).keys());

class CounterList extends Component {
  state = {
    numCounters: 2
  };

  addCounter = () =>
    this.setState(prevState => ({
      numCounters: prevState.numCounters + 1
    }));

  renderCounter(index) {
    return (
      <li key={index}>
        <Counter />
      </li>
    );
  }

  render() {
    const countersArray = createRange(this.state.numCounters);

    return (
      <div>
        <button onClick={this.addCounter}>Add Counter</button>

        <ul>{countersArray.map(num => this.renderCounter(num))}</ul>
      </div>
    );
  }
}

CounterList.propTypes = {
  numCounters: PropTypes.number
};

export default CounterList;
