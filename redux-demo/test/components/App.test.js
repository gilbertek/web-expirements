import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/components/App';

describe('<App /> Component', () => {
  it('renders a div', () => {
    const app = shallow(<App />);
    expect(app.type()).to.eql('div');
  });

  it('has a container-fluid class property', () => {
    const app = shallow(<App />);
    expect(app.find('.container-fluid')).to.have.length(1);
  });
});
