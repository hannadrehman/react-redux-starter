import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './combinedReducer';
import logger from './logger';

export default function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
  );
    /* global module:true */
  if (module.hot) {
    module.hot.accept('./combinedReducer', () => {
            const nextReducer = require('./combinedReducer').default; // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
