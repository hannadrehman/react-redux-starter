import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Account from './';

configure({ adapter: new Adapter() });

describe('Unit Test Cases for <Account /> Component', () => {
  const props = {
    name: 'hannad',
    email: 'hanadurrehman.main',
  };
  const wrapper=shallow(<Account name={props.name} email={props.email} />) //eslint-disable-line
  it('should render component', () => {
    expect(wrapper.find('article.account_wrapper').length).toEqual(1);
  });
  it('should have image avatar', () => {
    expect(wrapper.find('ImageAvatar')).toBeDefined();
  });
});
