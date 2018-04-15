import React, { Component } from 'react';
import PropTypes from 'propTypes';
import { TemperatureBox, LargeText, SmallText } from 'Elements/Box';

export default class Temperature extends Component {
  static propTypes = {
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    toggleForecast: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <TemperatureBox onClick={this.props.toggleForecast}>
        <LargeText>{this.props.temp}&deg;C</LargeText>
        <SmallText>{this.props.city}</SmallText>
      </TemperatureBox>
    );
  }
}
