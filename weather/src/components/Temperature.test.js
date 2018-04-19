import React from 'react';
import { shallow } from 'enzyme';
import Temperature from './Temperature';

describe('<Temperature />', () => {
  const props = {
    temp: 10,
    city: 'Toronto',
    toggleForecast: () => {},
  };

  it('renders correctly', () => {
    const wrapper = shallow(<Temperature {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
