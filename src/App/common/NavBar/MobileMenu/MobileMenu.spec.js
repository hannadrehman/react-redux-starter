import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MobileMenu from './';

configure({ adapter: new Adapter() });

describe('Test cases for <MobileMenu /> component', () => {
  const links = [
    { id: 0, name: 'Questions', link: '/question' },
    { id: 1, name: 'Groups', link: '/groups' },
    { id: 2, name: 'Topics', link: '/topics' },
  ];
  const menuState = 'show';
  const navigated = jest.fn();
  let wrapper = shallow(<MobileMenu menuState={menuState} links={links}  navigated={navigated} />); //eslint-disable-line
  it('should render', () => {
    expect(wrapper.find('article.mobilemenu_wrapper').length).toEqual(1);
  });
  it('Renders Component ', () => {
    expect(wrapper.find('article').hasClass('mobilemenu_wrapper')).toEqual(true);
  });
  it('Component is not empty ', () => {
    expect(wrapper.find('article').isEmpty()).toEqual(false);
  });
  it(`should have navigated class = ${menuState}`, () => {
    expect(wrapper.find('nav').hasClass(menuState)).toEqual(true);
  });
  it(`should render ${links.length} navigation links`, () => {
    expect(wrapper.find('ul').find('li').length).toEqual(links.length);
  });
  it('should have correct Link Prop and values', () => {
    wrapper.find('ul').find('li').forEach((elem, index) => {
      expect(elem.find({
        key: links[index].id,
        href: links[index].link,
        to: links[index].link,
      })).toMatchSnapshot();
    });
  });
  it('should call navigated function on click', () => {
    wrapper.find('Link').first().simulate('click');
    expect(navigated).toHaveBeenCalled();
  });
  it('should NOT call navigated function on click if its not type function', () => {
    const navigatedNew = 'read';
    wrapper = shallow(<MobileMenu menuState={menuState} links={links}  navigated={navigatedNew} />); //eslint-disable-line
    wrapper.find('Link').first().simulate('click');
    expect(wrapper).toBeDefined();
  });
});
