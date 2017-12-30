import 'babel-polyfill';
import 'raf/polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import configureStore from './App/store/configureStore';


const store = configureStore();

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('app'),
  );
};
/* global module:true */
if (module.hot) {
  module.hot.accept('./App/index', () => {
    const NewApp = require('./App/index').default; // eslint-disable-line
    render(NewApp);
  });
}

render(App);

