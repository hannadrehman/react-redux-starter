// this module is written to load component asynchronasly to implement code
// spliting. this component will do dynamic import to make each component that is loaded
// as a seperate file in webpack.

import React from 'react';

const moduleDefaultExport = module => module.default || module;

/**
 * @function
 * @name AsyncComponentLoader
 * s {object} loader component which you want to load asynchronasly
 * s {object} collection some extra props or properties for the component
 * @description to break our bundles into smaller files we do dynamic loading
 * of the components . meaning the component will be broken into a smaller js chunk
 * and will be loaded on demand. thus saving initial load time and useless js download
 * if is not required by the component.
 * this function will download the file and return a class when only the promise of downloading
 * the file is fullfilled
 * @returns {object} loader component which was initially passed/
 */

const AsyncComponentLoader = (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount() {
      if (!this.state.Component) {
        loader().then(moduleDefaultExport)
          .then((Component) => {
            AsyncComponent.Component = Component;
            this.setState(prevState => ({
              ...prevState,
              Component,
            }));
          }, (err) => {
            console.error(err);
          });
      }
    }
    render() {
      if (this.state.Component) {
        const { Component } = this.state;
        return (
          <Component {...this.props} {...collection} />
        );
      }

      return null;
    }
  }
);
export default AsyncComponentLoader;
