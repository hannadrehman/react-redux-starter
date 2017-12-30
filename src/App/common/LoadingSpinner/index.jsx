/*
* @component LoadingSpinner
* @type functional component
* @requires react,PropTypes,style,gear,rolling
* @props visible -- should be visible or not
* @props type -- type of spinner gear,rolling
* @props cssClass -- css class for image container if manual styling is required
* @children none
* @reduxActions false
* @description
* this component will be used to show a spinner on the screen
* we have 2 spinners gear and rolling , based on type we
* can switch what we want to show on the screen.
*/
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import gear from '../../../assets/images/loaders/gear.gif';
import rolling from '../../../assets/images/loaders/rolling.gif';


const LoadingSpinner = ({ visible, type, cssClass }) => {
  const imgUrl = (type === 'gear') ? gear : rolling;
  return (
    (visible) ? // if visible only show the data
      <article className="loadingspinner_wrapper">
        <section className={`spinner ${cssClass}`} >
          <img src={imgUrl} alt="loading.." />
        </section>
      </article>
      : ''
  );
};
LoadingSpinner.defaultProps = {
  cssClass: '',
};
LoadingSpinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  cssClass: PropTypes.string,
};
export default LoadingSpinner;
