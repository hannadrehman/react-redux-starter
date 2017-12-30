/*
* @component MobileMenu
* @type Stateless Component
* @props {string} menuState : the toggle state of the menu in mobile view
* @props {function} menuState : function which will be clicked when user navigates to link
* @props {array} links : array of objects that store site navigation links info
* @children none
* @redux false
* @reduxActions none
* @description
* this component is used to render the links in the mobile view. this is a simple drop down
* app drawer layout. which will toggle the drop based on the props menuState.
* if the menuState is open, we show the menu else hide it.
* when ever the link is clicked or tapped a function navigated. which is passed as props will
* be called so that the parent component knows that links has been clicked and we need to
* close the app drawer now. so the menuState in the parent will change which will cause this
* component to hide the drop down.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const MobileMenu = ({ menuState, navigated, links }) => {
  const handleClick = () => {
    if (navigated && typeof navigated === 'function') { navigated(); }
  };
  const renderLinks = () => links.map(current => (
    <li key={current.id}>
      <Link
        key={current.id}
        onClick={handleClick}
        className="mobile-links"
        to={current.link}
        href={current.link}
      >
        {current.name}
      </Link>
    </li>
  ));
  return (
    <article className="mobilemenu_wrapper">
      <nav className={`menu-mobile ${menuState}`}>
        <section className="mobile-nav">
          <ul className="mobile-nav-list">
            { renderLinks() };
          </ul>
        </section>
      </nav>
    </article>
  );
};
MobileMenu.propTypes = {
  menuState: PropTypes.string.isRequired,
  navigated: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired, //eslint-disable-line
};
export default MobileMenu;
