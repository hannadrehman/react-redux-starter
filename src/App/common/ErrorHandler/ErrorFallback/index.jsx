/*
* @component ErrorFallback
* @type Stateless component
* @requires react
* @children none
* @reduxActions false
* @description
* this component will display simple UI to the user and is called when error is occured in
* ErrorHandeler component.
*/
import React from 'react';

import './style.scss';

import errorImg from '../../../../assets/images/actions/link_broken.png';

const ErrorFallback = () => (
  <article className="errorfallback_wrapper">
    <section className="image-container" >
      <img src={errorImg} alt="some error occured" />
      <p className="error-name">Some error occured</p>
    </section>
  </article>
);

export default ErrorFallback;
