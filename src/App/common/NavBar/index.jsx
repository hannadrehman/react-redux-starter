/*
* @component NavBar
* @type Pure Component
* @props {datatype} name
* @children MobileMenu
* @requires React,Link,MobileMenu,Account,Autocomplete,ErrorHandler
* @reduxActions false
* @actions none
* @description
* this is a simple navigation component which will be used to render
* navigational links on the screen, this component is avaiable on all routes.
* this component will not be places inside the route component. it has to be above the
* Route or Router component so that the navigation can happen and this component is not
* rendered again and again.
* in responsive behaviour some parts of the menu will be hidden and a burger menu will
* be shown to the user. the style of mobile menu is different and is rendered by MobileMenu
* component which takes links($array),menuState($string),navigated($function) as props
*/
import React from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu';
import Account from './Account';
import ErrorHandler from './ErrorHandler';


import siteLogo from '../../../assets//images/logos/Git-Logo-White.png';
import './styles.scss';

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // currentMode: 'desktop',
      menuState: 'closed',
      links: [
        { id: 0, name: 'Ask', link: '/ask' },
        { id: 1, name: 'Groups', link: '/groups' },
        { id: 2, name: 'Topics', link: '/topics' },
      ],
    };
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.hasNavigationHappened = this.hasNavigationHappened.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
    this.getAutoCompleteData = this.getAutoCompleteData.bind(this);
    // this.navCallback = this.navCallback.bind(this);
  }
  getAutoCompleteData(obj) { //eslint-disable-line
    if (obj) {
        console.log(obj);//eslint-disable-line
    }
  }
  toggleNavigation(e) {
    e.preventDefault();
    const [currentState] = [e.currentTarget.dataset.menuState];
    if (currentState === 'closed') {
      this.setState(prevState => ({
        ...prevState,
        menuState: 'open',
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        menuState: 'closed',
      }));
    }
  }
  hasNavigationHappened() {
    // this function will be called inside the Child Mobile Navigation. meaning users has navigated
    // and we can close the menu.
    this.setState(prevState => ({
      ...prevState,
      menuState: 'closed',
    }));
  }

  renderLinks() {
    return this.state.links.map(current =>
      (
        <Link
          className="links"
          key={current.id}
          to={current.link}
          href={current.link}
        >
          {current.name}
        </Link>
      ));
  }
  render() {
    return (
      <header className="NavBar_wrapper">
        <section className="head">
          {/* burger menu */}
          <section
            id="mobileNavToggler"
            className="margin-top-2 menu-toggler"
            role="button"
            tabIndex={0}
            onClick={this.toggleNavigation}
            onKeyDown={this.toggleNavigation}
            data-menu-state={this.state.menuState}
          >
            <a id="burgerToggler" href="#/" className={`3-span ${this.state.menuState}`} > {/* prevent default navigation in click function. */}
              <span className="burger-bar" />
              <span className="burger-bar" />
              <span className="burger-bar" />
            </a>
          </section>
          {/* logo */}
          <section className="margin-top-4 logo-wrap">
            <Link className="go-home" to="/" href="/">
              <img className="logo-img" alt="Logo" src={siteLogo} />
            </Link> {' '}
          </section>
          {/* desktop navigation menu */}
          <section className="menu">
            <nav >
              {/* render all links */}
              {this.renderLinks()}
            </nav>
          </section>
          {/* changes */}
          {/* search */}
          <section className="search ">
            <section className="autocomplete-ctr" />
            <section className="autocomplete-icon">
              <i className="fa fa-search" />
            </section>
          </section>
          {/* account */}
          <section className="account ">
            <section>
              <ErrorHandler>
                <Account name="hanad ur rehman" email="hanadurrehman.main" />
              </ErrorHandler>
            </section>
          </section>

          <section className="mobile-Menu-ctr">
            {/*
              Rendering Child Mobile Navigation Menu Component.
              will be displayed only in mobile devices
              check is made in css media queries
            */}
            <ErrorHandler>
              <MobileMenu
                links={this.state.links}
                menuState={this.state.menuState}
                navigated={this.hasNavigationHappened}
              />
            </ErrorHandler>
          </section>
        </section>
      </header>
    );
  }
}
export default NavBar;
