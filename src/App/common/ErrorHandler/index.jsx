/*
* @component ErrorHandler
* @type Stateless component
* @requires react,ErrorFallback
* @props children
* @children component
* @reduxActions false
* @description
* this component will use reacts error boundry to catch any error in its
* child components. and display a fallback UI insted.
*/
import React from 'react';
import PropTypes from 'prop-types';

import ErrorFallback from './ErrorFallback';

import logErrorToMyService from './utility';

class ErrorHandler extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState(prevState => ({ ...prevState, hasError: true }));
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (<section className="e-h error-caught"><ErrorFallback /></section>);
    }
    return (<section className="e-h error-checked">{this.props.children}</section>);
  }
}


export default ErrorHandler;
