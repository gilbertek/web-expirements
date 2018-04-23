import React from 'react';
import Counter from './Counter';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Counter />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />);
    const expectedText = wrapper.find('p').text();
    expect(expectedText).toEqual('Current count: 0');
  });

  it('increments the count when the button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const expectedText = wrapper.find('p').text();
    expect(expectedText).toEqual('Current count: 1');
  });

  it('decrements the count when the decrement button is clicked', () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find('button.decrement');
    incrementBtn.simulate('click');
    const expectedText = wrapper.find('p').text();
    expect(expectedText).toEqual('Current count: -1');
  });
});
