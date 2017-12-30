import { combineReducers } from 'redux';
import modalPopupReducer from './ModalPopup/reducer';


export default combineReducers({
  modalPopup: modalPopupReducer,
});
