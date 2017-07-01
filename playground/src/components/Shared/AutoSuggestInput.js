import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

class AutoSuggestInput extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`row`}>

      </div>
    );
  }
}

export default AutoSuggestInput;
