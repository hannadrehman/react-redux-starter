import { combineReducers } from 'redux';

const dummyReducer = (state = {}, actions) => {
  switch (actions.name) {
    default:
      return state;
  }
};

export default combineReducers({
  dummyReducer,
});
