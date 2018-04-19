import React from 'react';
import PropTypes from 'prop-types';
import { TemperatureBox, LargeText, SmallText } from '../globals/box';

const Temperature = props => (
  <TemperatureBox onClick={props.toggleForecast}>
    <LargeText>{props.temp}&deg;C</LargeText>
    <SmallText>{props.city}</SmallText>
  </TemperatureBox>
);

Temperature.propTypes = {
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  toggleForecast: PropTypes.bool.isRequired,
};

export default Temperature;
