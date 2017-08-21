import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import jasmine from 'jasmine';
import Tab from '../../../src/components/Formulary/Tab';

describe('<Tab/> Component', () => {
  let wrapper        = null;
  const plan         = {};

  // const onClick = expect.spyOn(
  //   Tab.prototype, 'onClick'
  // ).andCallThrough();

  // const onClick = jasmine.spyOn(Tab, 'onClick');

  beforeEach(() => {
    wrapper = mount(
      <Tab onClick={onClick}
        tabIndex={2}
        isActive
        className={'foo'}
        plan={plan}
      />
    );
  });

  it('should render', () => {
    expect(wrapper.length).toBeTruthy();
  });

});
