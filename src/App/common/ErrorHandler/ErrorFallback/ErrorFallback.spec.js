import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ErrorFallback from './';

configure({ adapter: new Adapter() });

describe('Unit Test cases for <ErrorFallback /> Component', () => {
  let wrapper = shallow(<ErrorFallback  />); //eslint-disable-line
  it('should render the ErrorFallback component', () => {
    expect(wrapper.find('article').hasClass('errorfallback_wrapper')).toBe(true);
  });
  it('should render img tag', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
  it('img tag rendered should have alt = some error occured', () => {
    expect(wrapper.find('img').props().alt).toEqual('some error occured');
  });
  it('should have error message in the p tag', () => {
    expect(wrapper.find('p.error-name').length).toBe(1);
  });
});
