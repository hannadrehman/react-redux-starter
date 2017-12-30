import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import { stub } from 'sinon';

import ImageAvatar from './';

configure({ adapter: new Adapter() });

describe('Unit Test cases for <ImageAvatar /> Component', () => {
  const props = {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHxzcs29RZh0RcqCHtSAOQypBXyHCxkMShe1OmyXYEKFFZpdn',
    alt: 'hannad',
    imageText: 'hannad rehman',
  };
  const defaultProps = {
    alt: 'image',
    imageText: 'QA',
  };
  let wrapper = shallow(<ImageAvatar imageUrl={props.imageUrl} alt={props.alt} imageText={props.imageText} />); //eslint-disable-line
  it('should render the ImageAvatar component', () => {
    expect(wrapper.find('article').hasClass('imageavatar_wrapper')).toBe(true);
  });
  it('should render img tag', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
  it(`img tag rendered should have alt = ${props.alt}`, () => {
    expect(wrapper.find('img').props().alt).toEqual(props.alt);
  });
  it(`should  should have props url = ${props.imageUrl}`, () => {
   const wrapper = mount(<ImageAvatar imageUrl={props.imageUrl} alt={props.alt} imageText={props.imageText} />); //eslint-disable-line
    expect(wrapper.props().imageUrl).toEqual(props.imageUrl);
    wrapper.unmount();
  });
  it(`should  should have props imagetText = ${props.imageText}`, () => {
    const wrapper = mount(<ImageAvatar imageUrl={props.imageUrl} alt={props.alt} imageText={props.imageText} />); //eslint-disable-line
    expect(wrapper.props().imageText).toEqual(props.imageText);
    wrapper.unmount();
  });
  it(`should  should have props alt = ${props.alt}`, () => {
    const wrapper = mount(<ImageAvatar imageUrl={props.imageUrl} alt={props.alt} imageText={props.imageText} />); //eslint-disable-line
    expect(wrapper.props().alt).toEqual(props.alt);
    wrapper.unmount();
  });
  it('should render default props', () => {
    wrapper = shallow(<ImageAvatar imageUrl={props.imageUrl} />); //eslint-disable-line
    const img = wrapper.find('img');
    expect(img.props().alt).toEqual(defaultProps.alt);
  });
  it('should call on error fn when img url fails', () => {
    const { createElement } = global.document; //eslint-disable-line
    const FAKECanvasElement = {
      getContext: jest.fn(() => ({
        font: '',
        fillText: jest.fn(),
        fillStyle: null,
        fillRect: jest.fn(),
        drawImage: jest.fn(),
        getImageData: jest.fn(),
      })),
      toDataURL: jest.fn(),
    };
    // x
    stub(global.document, 'createElement') //eslint-disable-line
      .callsFake(createElement)
      .withArgs('canvas')
      .returns(FAKECanvasElement);

    props.imageUrl = 'abcd.png';
    wrapper = mount(<ImageAvatar {...props} />); //eslint-disable-line

    wrapper.find('img').simulate('error');
    expect(FAKECanvasElement.getContext).toHaveBeenCalled();
    expect(FAKECanvasElement.toDataURL).toHaveBeenCalled();
    wrapper.unmount();
  });
});
