export const modalPopupActionNames = {
  MODALPOPUP_SHOW_MODAL: 'MODALPOPUP_SHOW_MODAL',
  MODALPOPUP_HIDE_MODAL: 'MODALPOPUP_HIDE_MODAL',
};

export const modalActions = {
  showModal(modalData) {
    return {
      type: modalPopupActionNames.MODALPOPUP_SHOW_MODAL,
      payload: modalData,
    };
  },
  hideModal() {
    return {
      type: modalPopupActionNames.MODALPOPUP_HIDE_MODAL,
      payload: false,
    };
  },
};
