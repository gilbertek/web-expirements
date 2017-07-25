import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import ToggleableComponent from '../../../src/components/Shared/ToggleableComponent';

describe('<ToggleableComponent /> Component', () => {
  const props = {
    style: 'active'
  };
  const Component = () => <div />;

  it('should contains a child component', () => {
    const WrappedComponent = ToggleableComponent(Component);

    const wrapper = mount(<WrappedComponent {...props} />);
    expect(wrapper.find(Component).length).toBe(1);
  });
});

