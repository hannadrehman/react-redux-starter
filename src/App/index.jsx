/*
* @component App
* @type statefull Component
* @props {object} store
* @props {object} user
* @props {object} login
* @children Provider
* @children ErrorHandler
* @children Router
* @children NavBar
* @children Routes
* @reduxActions true
* @actions login
* @description
* this is a root component that will load all other components,
* this is the primary component which will load the entire application
* we are also initializing the OAUTH here.
*/
import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter For HTML 5 Routing, HashRouter
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';


import NavBar from './common/NavBar';
import Routes from './Routes';
import ModalPopup from './common/ModalPopup';
import ErrorHandler from './common/ErrorHandler';

import './scss/base.scss';

class App extends React.Component {
  static propTypes={
    store:PropTypes.object.isRequired, // eslint-disable-line
    user:PropTypes.object.isRequired, // eslint-disable-line
  }
  constructor(props) { //eslint-disable-line
    super(props);
  }
  // when root loads fire checklogin
  componentWillMount() {

  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <ErrorHandler>
            <main className="container-fluid">
              <NavBar />
              <section className="justify-content-md-center" >
                {/* render routes only if user is logged in */}
                <Routes />
              </section>
              <ModalPopup />
            </main>
          </ErrorHandler>
        </Router>
      </Provider>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}
function mapStateToProps(store) {
  return {
    user: store.app.user,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
