import React from 'react';
import ReactDOM from 'react-dom';
import App, { Link } from './App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() })

describe('<App /> shallow rendering', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });


  it('should contain 1 p element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p.App-intro').exists()).toBe(true)
  });

  it('on button click changes p text', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('No!');

    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('Yes!');
  });

  it('on input change, title change text', () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find('input');
    expect(wrapper.find('h2').text()).toBe('');

    input.simulate('change', {currentTarget: { value: 'Georgy' }})
    expect(wrapper.find('h2').text()).toBe('Georgy');
  });

  it('updates component className with new state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.blue').length).toBe(1);
    expect(wrapper.find('.red').length).toBe(0);
    wrapper.setState({ mainColor: 'red' });
    expect(wrapper.find('.blue').length).toBe(0);
    expect(wrapper.find('.red').length).toBe(1);
  });

  it('calls componentDidMount, update p tag', () => {
    jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycle').text()).toBe('componentDidMount');
  });

  it('setProps calls componentWillReceiveProps', () => {
    jest.spyOn(App.prototype, 'componentWillReceiveProps');
    const wrapper = shallow(<App />);
    wrapper.setProps({ hide: true });
    expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycle').text()).toBe('componentWillReceiveProps');
  });

  it('handleStrings function returns correctly', () => {
    const wrapper = shallow(<App />);
    const trueReturn = wrapper.instance().handleStrings('Hello World');
    expect(trueReturn).toBe(true);

    const falseReturn = wrapper.instance().handleStrings('');
    expect(falseReturn).toBe(false);
  });


});

describe('<App /> mount rendering', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text()).toBe('Welcome to React')
  });
});

describe('<Link />', () => {
  it('link component accepts address props', () => {
    const wrapper = shallow(<Link address='www.google.com' />);
    expect(wrapper.instance().props.address).toBe('www.google.com')
  });

  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />);
    expect(wrapper.props().href).toBe('www.google.com');
  });

  it('returns null with tru hide props', () => {
    const wrapper = shallow(<Link hide={false} />)
    expect(wrapper.find('a').length).toBe(1)

    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull()
  });

});

