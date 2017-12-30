import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import NavBar from './';

configure({ adapter: new Adapter() });

describe('Unit Test cases for <NavBar /> Component', () => {
  let wrapper = shallow(<NavBar  />); //eslint-disable-line
  const linksState = [
    { id: 0, name: 'Ask', link: '/ask' },
    { id: 1, name: 'Groups', link: '/groups' },
    { id: 2, name: 'Topics', link: '/topics' },
  ];
  const menuState = 'closed';
  it('Should Render NavBar Component', () => {
    expect(wrapper.find('.NavBar_wrapper').length).toEqual(1);
  });
  it('should have a valid links State', () => {
    expect(wrapper.state().links).toEqual(linksState);
  });
  it('burger menu should have a valid class', () => {
    expect(wrapper.find('#burgerToggler').hasClass(menuState)).toEqual(true);
  });
  it('burger menu click should add show class to #burgerToggler', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: {
        dataset: {},
      },
    };
    expect(wrapper.find('#burgerToggler').hasClass('closed')).toEqual(true);
    expect(wrapper.state().menuState).toEqual('closed');
    wrapper.find('.menu-toggler').simulate('click', mockEvent);
    wrapper.setState(prevState => ({ ...prevState, menuState: 'open' }));
    expect(wrapper.state().menuState).toEqual('open');
    expect(wrapper.find('#burgerToggler').hasClass('open')).toEqual(true);
  });
  it('should toggle mobile menu navigation from CLOSED state to OPEN state', () => {
    const ev = {
      preventDefault: jest.fn(),
      currentTarget: {
        dataset: {
          menuState: 'closed',
        },
      },
    };
    wrapper.find('section#mobileNavToggler').simulate('click', ev);
    expect(ev.preventDefault).toHaveBeenCalled();
    expect(wrapper.state().menuState).toEqual('open');
  });
  it('should toggle mobile menu navigation from OPEN state to CLOSED state', () => {
    const ev = {
      preventDefault: jest.fn(),
      currentTarget: {
        dataset: {
          menuState: 'open',
        },
      },
    };
    wrapper.find('section#mobileNavToggler').simulate('click', ev);
    expect(ev.preventDefault).toHaveBeenCalled();
    expect(wrapper.state().menuState).toEqual('closed');
  });
  it('should call hasNavigationHappened when user clisk on any link in mobileview', () => {
    spy(NavBar.prototype, 'hasNavigationHappened');
    wrapper = shallow(<NavBar />);
    wrapper.find('MobileMenu').dive().find('Link').first().simulate('click') //eslint-disable-line
    expect(NavBar.prototype.hasNavigationHappened.calledOnce).toBe(true);
  });
  it('should getAutoCompleteData which is passed to to autocomplete', () => {
    const wNav = shallow(<NavBar />);
    const getAutoCompleteData = spy(wNav.instance().getAutoCompleteData);
    getAutoCompleteData({ a: 'b' });
    expect(getAutoCompleteData.callCount).toBe(1);
  });
});
