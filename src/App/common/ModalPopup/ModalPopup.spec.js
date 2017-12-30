import React from 'react';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ModalPopup from './';
import { modalPopupActionNames, modalActions } from './actions';
import reducer from './reducer';

configure({ adapter: new Adapter() });


describe('Unit Test Cases for ModalPopup redux actions', () => {
  const expectedActionNames = {
    MODALPOPUP_SHOW_MODAL: 'MODALPOPUP_SHOW_MODAL',
    MODALPOPUP_HIDE_MODAL: 'MODALPOPUP_HIDE_MODAL',
  };
  it('should export modalPopupActionNames with desired names', () => {
    expect(modalPopupActionNames).toEqual(expectedActionNames);
  });
  it(`modalActions should return ${modalPopupActionNames.MODALPOPUP_SHOW_MODAL} action`, () => {
    const expectedPayload = {
      name: 'hannad',
      title: 'rehman',
      okText: 'ok',
      canceltext: 'cancel',
      okFunc: jest.fn(),
      cancelFunc: jest.fn(),
      type: 'danger',
    };
    expect(modalActions.showModal(expectedPayload)).toEqual({
      type: modalPopupActionNames.MODALPOPUP_SHOW_MODAL,
      payload: expectedPayload,
    });
  });
  it(`modalActions should return ${modalPopupActionNames.MODALPOPUP_HIDE_MODAL} action`, () => {
    expect(modalActions.hideModal()).toEqual({
      type: modalPopupActionNames.MODALPOPUP_HIDE_MODAL,
      payload: false,
    });
  });
});

describe('Unit Test Cases for <ModalPopup />  Component', () => {
  const initialState = {
    common: {
      modalPopup: {
        id: 999,
        visible: true,
        name: 'hannad',
        title: 'rehman',
        okText: 'ok',
        canceltext: 'cancel',
        okFunc: jest.fn(),
        cancelFunc: jest.fn(),
        type: 'danger',
      },
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const visible = true;
  let wrapper = shallow(<ModalPopup store={store}  />) //eslint-disable-line
  it('Should Render Component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('Should have Visible Props', () => {
    expect(wrapper.prop('modalPopup').visible).toBe(visible);
  });
  it('should have content if visible prop is true', () => {
    initialState.common.modalPopup.visible = true;
    wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    expect(wrapper.dive().find('.modalpopup_wrapper').length).toBe(1);
  });
  it('should NOT have content if visible prop is false', () => {
    initialState.common.modalPopup.visible = false;
    wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    expect(wrapper.dive().find('.modalpopup-wrapper').length).toBe(0);
  });
  it('should have "alakazam" class the Prop is visible', () => {
    initialState.common.modalPopup.visible = true;
    wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    expect(wrapper.dive().find('#modal-container').hasClass('modal-container alakazam')).toBe(true);
  });
  it('should NOT have "alakazam" class the Prop is NOT visible', () => {
    initialState.common.modalPopup.visible = false;
    wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    expect(wrapper.dive().find('#modal-container').length).toEqual(0);
  });
  it('should have "modal-container alakazam" class the Prop is visible', () => {
    initialState.common.modalPopup.visible = true;
    wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    expect(wrapper.dive().find('#modal-container').hasClass('modal-container')).toBe(true);
  });
  it('should NOT have "alakazam" class the Prop is NOT visible', () => {
    initialState.common.modalPopup.visible = false;
    wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    expect(wrapper.dive().find('#modal-container').length).toBe(0);
  });
  it('should have modalpopup prop equal to dispatched props', () => {
    initialState.common.modalPopup.visible = true;
    const initStore = mockStore(initialState);
    wrapper= shallow(<ModalPopup store={initStore} />) ; //eslint-disable-line
    const payload = {
      name: 'hannad',
      title: 'rehman',
      okText: 'ok',
      canceltext: 'cancel',
      okFunc: jest.fn(),
      cancelFunc: jest.fn(),
      type: 'danger',
    };
    initStore.dispatch({
      type: modalPopupActionNames.MODALPOPUP_SHOW_MODAL,
      payload,
    });
    const newState = reducer(undefined, payload);
    const newStore = mockStore({ common: { modalPopup: newState } });
    const newWrapper = shallow(<ModalPopup store={newStore} />);
    expect(newWrapper.props().modalPopup).toEqual(newState);
  });
  it('Should Dispatch "MODALPOPUP_HIDE_MODAL" on cancle button click', () => {
    initialState.common.modalPopup.visible = true;
    wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    wrapper.dive().find('#modalCancelBtn').simulate('click');
    const actions = store.getActions();
    const expectedPayload = {
      type: modalPopupActionNames.MODALPOPUP_HIDE_MODAL,
      payload: false,
    };
    expect(actions).toEqual([expectedPayload]);
  });
  it('should dispatch "MODALPOPUP_HIDE_MODAL" on ESC key press', () => {
    initialState.common.modalPopup.visible = true;
    const wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    const modalContainer = wrapper.dive().find('#modal-container');
    const ev = {
      keyCode: 27,
    };
    modalContainer.simulate('keyDown', ev);
    const actions = store.getActions();
    const expectedPayload = {
      type: modalPopupActionNames.MODALPOPUP_HIDE_MODAL,
      payload: false,
    };
    expect(actions[1]).toEqual(expectedPayload);
    expect(modalContainer.find('article').length).toEqual(0);
  });
  it('should NOT dispatch "MODALPOPUP_HIDE_MODAL" on any other key except ESC key press', () => {
    initialState.common.modalPopup.visible = true;
    const wrapper= shallow(<ModalPopup store={store} />) ; //eslint-disable-line
    const modalContainer = wrapper.dive().find('#modal-container');
    const ev = {
      keyCode: 28,
    };
    const prevActions = store.getActions();
    modalContainer.simulate('keyDown', ev);
    const actions = store.getActions();
    expect(prevActions).toEqual(actions);
  });
  it('should dispatch "MODALPOPUP_HIDE_MODAL" on OK key press', () => {
    initialState.common.modalPopup.visible = true;
    const storenew = mockStore(initialState);
    const wrapper= shallow(<ModalPopup store={storenew} />) ; //eslint-disable-line
    const modalContainer = wrapper.dive().find('#modalOKBtn');

    modalContainer.simulate('click');
    const actions = store.getActions();
    const expectedPayload = {
      type: modalPopupActionNames.MODALPOPUP_HIDE_MODAL,
      payload: false,
    };
    expect(actions[actions.length - 1]).toEqual(expectedPayload);
    expect(modalContainer.find('article').length).toEqual(0);
  });
  it('should Not Call OkFunction in modalPopup if its not type function', () => {
    initialState.common.modalPopup.visible = true;
    initialState.common.modalPopup.okFunc = 'ad';
    const storenew = mockStore(initialState);
    const wrapper= shallow(<ModalPopup store={storenew} />) ; //eslint-disable-line
    const modalContainer = wrapper.dive().find('#modalOKBtn');

    modalContainer.simulate('click');
  });
  it('should Not Call cancleFunction in modalPopup if its not type function', () => {
    initialState.common.modalPopup.visible = true;
    initialState.common.modalPopup.cancelFunc = 'ad';
    const storenew = mockStore(initialState);
    const wrapper= shallow(<ModalPopup store={storenew} />) ; //eslint-disable-line
    const modalcancle = wrapper.dive().find('#modalCancelBtn');

    modalcancle.simulate('click');
  });
});

describe('Unit Test Cases for ModalPopup Reducer', () => {
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
  it('should return the initial State', () => {
    expect(reducer(undefined, {})).toEqual(defaultModalPopupState);
  });
  it('should handle MODALPOPUP_SHOW_MODAL and return new state', () => {
    const payload = {
      title: 'MR Rehman Has done it.',
      body: 'if this is displayed then we are dont with redux',
      okText: 'ookkaayy',
      cancelText: 'Kancel',
      okFunc: () => { alert('ok func is working'); },//eslint-disable-line
      cancelFunc: () => { alert('cancle func is working') ;},//eslint-disable-line
      modalType: 'warning',
    };
    const showModalAction = {
      type: modalPopupActionNames.MODALPOPUP_SHOW_MODAL,
      payload,
    };
    const newState = reducer(undefined, showModalAction);
    expect(newState.visible).toEqual(true);
    expect(newState.title).toEqual(payload.title);
    expect(newState.okText).toEqual(payload.okText);
    expect(newState.cancelText).toEqual(payload.cancelText);
    expect(newState.okFunc).toEqual(payload.okFunc);
    expect(newState.cancelFunc).toEqual(payload.cancelFunc);
    expect(newState.modalType).toEqual(payload.modalType);
  });
  it('should handle MODALPOPUP_SHOW_MODAL and return new state with default values if not specified', () => {
    const payload = {
    };
    const showModalAction = {
      type: modalPopupActionNames.MODALPOPUP_SHOW_MODAL,
      payload,
    };
    const newState = reducer(undefined, showModalAction);
    expect(newState.visible).toEqual(true);
    expect(newState.title).toEqual('');
    expect(newState.okText).toEqual('ok');
    expect(newState.cancelText).toEqual('cancel');
    expect(newState.okFunc).toEqual(null);
    expect(newState.cancelFunc).toEqual(null);
    expect(newState.modalType).toEqual('warning');
  });
  it('should handle MODALPOPUP_HIDE_MODAL and return new state', () => {
    const hideModalAction = {
      type: modalPopupActionNames.MODALPOPUP_HIDE_MODAL,
      payload: false,
    };
    const newState = reducer(undefined, hideModalAction);
    expect(newState.visible).toEqual(false);
    expect(newState.id).toBeGreaterThan(1);
  });
});
