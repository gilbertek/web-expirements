import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import MedicationHistory from '../MedicationHistory';

class MedicationHistoryReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false
    };

    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.getApplicationNode = this.getApplicationNode.bind(this);
  }

  deactivateModal = () =>
    this.setState({ modalActive: false });

  activateModal = () =>
    this.setState({ modalActive: true });

  getApplicationNode = () => {
    return document.getElementById('app-container');
  };

  render() {
    const { memberId, editMode } = this.props;
    const modal = this.state.modalActive
      ? <AriaModal
          mounted={this.state.modalActive}
          titleText='Medication History Review'
          onExit={this.deactivateModal}
          focusDialog
          getApplicationNode={this.getApplicationNode}
          underlayStyle={{ paddingTop: '2em' }}>
          <div className='modal'>
            <a className='close_modal' href='#' onClick={this.deactivateModal}>x</a>
            <div className='modal-body'>
              <MedicationHistory
                memberId={memberId}
                editMode={editMode} />
            </div>
            <footer className='modal-footer'>
              <button id='demo-one-deactivate' onClick={this.deactivateModal}>
                deactivate
              </button>
            </footer>
          </div>
        </AriaModal>
      : false;

    return (
      <div>
        <button onClick={this.activateModal}>show modal</button>
        { modal }
      </div>
    );
  }
}

MedicationHistoryReviewContainer.propTypes = {
};

export default MedicationHistoryReviewContainer;
