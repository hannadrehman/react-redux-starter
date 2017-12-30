/*
* @component ImageAvatar
* @type Stateless component
* @props {string} imageUrl
* @props {string} alt
* @props {string} imageText
* @requires react,prop-types,style.scss
* @children none
* @reduxActions false
* @description
* this is a simple image avatar / user picture component. it will display an image in a circle
* if the image url fails then a text will be displayed that is created from
* the imageText supplied to the component
*/
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class ImageAvatar extends React.Component {
  static defaultProps = {
    alt: 'image',
    imageText: 'QA',
  };
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageText: PropTypes.string,
    alt: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: this.props.imageUrl,
    };
    this.handleError = this.handleError.bind(this);
  }
  handleError() {
    const all = this.props.imageText.replace(/\./g, '').split(' ');
    // add first + (if second)
    const text = all[0][0] + ((all[1]) ? all[1][0] : '');
    const size = (text.length > 1) ? 7.5 : 12;
    const canvas = document.createElement('canvas');
    canvas.width = 30;
    canvas.height = 30;
    const ctx = canvas.getContext('2d');
    ctx.font = '12px Segoe UI';
    ctx.fillStyle = '#c5cae9';
    ctx.fillRect(0, 0, 30, 30);
    ctx.fillStyle = 'white';
    ctx.fillText(text.toUpperCase(), size, 20);
    // re assign new image url to the image
    const newImgUrl = canvas.toDataURL('image/png');
    this.setState(prevState => ({ ...prevState, imgUrl: newImgUrl }));
  }
  render() {
    return (
      <article className="imageavatar_wrapper">
        <img
          className="image-with-fallback"
          src={this.state.imgUrl}
          alt={this.props.alt}
          onError={this.handleError}
        />
      </article>
    );
  }
}

export default ImageAvatar;
