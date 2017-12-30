import { modalPopupActionNames } from './actions';

const defaultModalPopupState = {
  id: 1,
  title: null,
  body: null,
  okText: 'ok',
  cancelText: 'cancel',
  okFunc: null,
  cancelFunc: null,
  modalType: 'info',
  visible: false,
};

const modalPopupReducer = (state = defaultModalPopupState, action) => {
  switch (action.type) {
    case modalPopupActionNames.MODALPOPUP_SHOW_MODAL:
      return {
        ...state,
        id: state.id + 1,
        visible: true,
        title: action.payload.title || '',
        body: action.payload.body || '',
        okText: action.payload.okText || 'ok',
        cancelText: action.payload.cancelText || 'cancel',
        okFunc: action.payload.okFunc || null,
        cancelFunc: action.payload.cancelFunc || null,
        modalType: action.payload.modalType || 'warning',
      };
    case modalPopupActionNames.MODALPOPUP_HIDE_MODAL:
      return {
        ...state,
        id: state.id + 1,
        visible: false,
      };
    default:
      return state;
  }
};

export default modalPopupReducer;
