/**
 * this will contain App reducer [reducer for root]
 * all reducers in each category will be combined here.
 * categories/directories
 * 1.App
 * 2.common
 * 3.elements
 * 4.common
 * each of these directories will have their own combined reducers which will further
 * go down to their folders.
 */
import { combineReducers } from 'redux';
import commonReducer from './common/reducer';
import { appActionNames } from './actions';
import routeReducer from './Routes/reducer';

const defaultState = {
  user: {},
};
const appReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case appActionNames.APP_LOGIN:
      return {
        ...state,
        user: actions.payload,
      };
    case appActionNames.APP_LOGOUT:
      return {
        ...state,
        user: { },
      };
    default:
      return state;
  }
};
export default combineReducers({
  common: commonReducer,
  app: appReducer,
  routes: routeReducer,
});
