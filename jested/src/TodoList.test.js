import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './TodoList';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() })

const updateInput = ( wrapper, instance, newValue ) => {
  const input = wrapper.find(instance);
  input.simulate('change', {
    currentTarget: { value: newValue }
  });

  return wrapper.find(instance);
};

describe('<TodoList />', () => {
  it('calls addTodo Redux action creator with button click', () => {
    const props = {
      addTodo: jest.fn(),
      todos: []
    };

    const wrapper = shallow(<TodoList {...props} />);
    wrapper.find('.todos--addTodo').simulate('change', {
      currentTarget: { value: 'Buy eggs' }
    });
    wrapper.find('.todo--button').simulate('click');
    expect(props.addTodo).toHaveBeenCalledWith({ text: 'Buy eggs' });
  });

  it('calls removeTodo Redux action creator with button click', () => {
    const props = {
      removeTodo: jest.fn(),
      todos: [{ text: 'Buy eggs' }, { text: 'Change Oil' }]
    };

    const wrapper = shallow(<TodoList {...props} />);
    wrapper.find('li').at(0).simulate('click');
    expect(props.removeTodo).toHaveBeenCalledWith(0);
  });

  it('matches the snapshot', () => {
    const props = {
      addTodo: jest.fn(),
      todos: []
    };

    const tree = shallow(<TodoList {...props} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
