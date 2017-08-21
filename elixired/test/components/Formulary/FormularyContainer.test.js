import React from 'react';
import expect from 'expect';
import thunk from 'redux-thunk';
import jasmine from 'jasmine';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Formulary from '../../../src/components/Formulary/Formulary';
import FormularyContainer from '../../../src/components/Formulary/FormularyContainer';

describe('<FormularyContainer /> Container', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({ formulary: {} });

  const props = {};
});

describe('mapStateToProps', () => {
  describe('Loads formulary data on render', () => {
    it('should render formulary data', () => {
      // const dispatch = jasmine.createSpy('dispatch');
      // const result = mapDispatchToProps(dispatch);
    });
  });
});
