import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { spy } from 'sinon';


import ErrorHandler from './';
import Utility from './utility';

configure({ adapter: new Adapter() });

describe('Unit Test cases for <ErrorHandler /> Component', () => {
  const wrapper = shallow(<ErrorHandler><p>Hello world</p></ErrorHandler>); //eslint-disable-line
  it('should render the ErrorHandler component', () => {
    expect(wrapper.find('section.e-h').length).toBe(1);
  });
  it('should have a valid state', () => {
    const state = wrapper.state();
    expect(state).toBeDefined();
  });
  it('should render children if state has error is false', () => {
    const { hasError } = wrapper.state();
    if (!hasError) {
      expect(wrapper.find('section.error-checked').length).toBe(1);
    }
  });
  it('should NOT render children if state has error is false', () => {
    wrapper.setState(prevState => ({ ...prevState, hasError: true }));
    if (wrapper.instance().state.hasError === true) {
      expect(wrapper.find('section.error-caught').length).toBe(1);
    }
  });
  it('should call componentDiDCatch life cycle', () => {
    spy(ErrorHandler.prototype, 'componentDidCatch');
    const wrapper = mount(<ErrorHandler><p>{Error()}</p></ErrorHandler>); //eslint-disable-line
    expect(ErrorHandler.prototype.componentDidCatch.callCount).toBe(1);
  });
});

describe('Unit Test cases for ErrorHandler Utility', () => {
  expect(Utility).toBeDefined();
});
