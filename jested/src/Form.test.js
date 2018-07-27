import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import api from './api';

configure({ adapter: new Adapter() })

const updateInput = ( wrapper, instance, newValue ) => {
  const input = wrapper.find(instance);
  input.simulate('change', {
    currentTarget: { value: newValue }
  });

  return wrapper.find(instance);
};

describe('<Form /> shallow rendering', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Form />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('receive promotions default is true', () => {
    const wrapper = shallow(<Form />);
    const promotionInput = wrapper.find('[data-testid="checked"]');
    expect(promotionInput.props().checked).toBe(true);
  });

  test('allows user to fill out form', () => {
    const wrapper = shallow(<Form />);
    const nameInput = updateInput(wrapper, '[data-testid="name"]', 'Gorgy');
    const emailInput = updateInput(wrapper, '[data-testid="email"]', 'gorgy@gmail.com');
    const numberInput = updateInput(wrapper, '[data-testid="number"]', '(212) 454-4533');

    wrapper.find('[data-testid="checked"]').simulate('change');

    expect(nameInput.props().value).toBe('Gorgy');
    expect(emailInput.props().value).toBe('gorgy@gmail.com');
    expect(numberInput.props().value).toBe('(212) 454-4533');
    expect(wrapper.find('[data-testid="checked"]').props().checked).toBe(false)
  });

  test('submit the form', () => {
    jest.spyOn(api, 'addUser').mockImplementation(() => Promise.resolve({data: 'New User Added'}));
    const wrapper = shallow(<Form />);
    updateInput(wrapper, '[data-testid="name"]', 'Gorgy');
    updateInput(wrapper, '[data-testid="email"]', 'gorgy@gmail.com');
    updateInput(wrapper, '[data-testid="number"]', '(212) 454-4533');
    wrapper.find('[data-testid="addUserForm"]').simulate('submit', { preventDefault: () => {} });
    expect(api.addUser).toHaveBeenCalledWith('Gorgy', 'gorgy@gmail.com', '(212) 454-4533');
  });
});
