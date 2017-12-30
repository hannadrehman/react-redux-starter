/*
* @component ModalPopup
* @type statefull component
* @props {function} hideModal action that will hide the modal
* @props {object} modalPopup  object for modal popup
* @requires React,PropTypes,connect,bindActionCreators,modalActions,
* @children none
* @reduxActions false
* @actions hideModal
* @description
* this is a simple modal popup component that will display a notification on the screen
* this component recieves props via store and displays when a the data updated on it.
* this can be used to show error alerts, notifications, info message etc to the user.
*/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { modalActions } from './actions';

import './style.scss';

class ModalPopup extends React.Component {
  static propTypes = {
    modalPopup: PropTypes.object.isRequired, //eslint-disable-line
    hideModal: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.hideModal = this.hideModal.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  hideModal() {
    this.props.hideModal();
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.hideModal();
    }
  }
  handleOk() {
    this.hideModal();
    if (this.props.modalPopup.okFunc &&
      typeof this.props.modalPopup.okFunc === 'function') {
      this.props.modalPopup.okFunc();
    }
  }
  handleCancel() {
    this.hideModal();
    if (this.props.modalPopup.cancelFunc && typeof this.props.modalPopup.cancelFunc === 'function') {
      this.props.modalPopup.cancelFunc();
    }
  }
  render() {
    return (
      // hide if is not visible
      (this.props.modalPopup.visible) ?
        <article className="modalpopup_wrapper">
          <section
            id="modal-container"
            className="modal-container alakazam"
            role="button"
            tabIndex={0}
            onKeyDown={this.handleKeyDown}
          >
            <section className="modal-background">
              <section className="modal">
                <section className="modal-content">
                  <header className="title">
                          Title
                  </header>
                  <section className="body">
                          Body of popup
                  </section>
                  <footer className="footer">
                    <button
                      id="modalCancelBtn"
                      type="button"
                      className="hbtn hbtn-default"
                      onClick={this.handleCancel}
                    >Cancel
                    </button>
                    <button
                      id="modalOKBtn"
                      type="button"
                      className="hbtn hbtn-default"
                      onClick={this.handleOk}
                    >ok
                    </button>
                  </footer>
                </section>
              </section>
            </section>
          </section>
        </article> : ''
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    hideModal: modalActions.hideModal,
  }, dispatch);
}
function mapStateToProps(store) {
  return {
    modalPopup: store.common.modalPopup,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalPopup);
