import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import MedicationHistory from '../MedicationHistory';
import ClinicalMedication from '../ClinicalMedication';

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
    const modal = this.state.modalActive
      ? <AriaModal
          mounted={this.state.modalActive}
          titleText='Medication History Review'
          onExit={this.deactivateModal}
          focusDialog
          getApplicationNode={this.getApplicationNode}
          underlayStyle={{ paddingTop: '2em' }}>
          <div className='modal'>
            <header className='modal-header'>
              <h2 id='demo-two-title'
                className='modal-title'>
                Medication History Review
              </h2>
              <button
                className='close-button'
                data-close
                aria-label='Close modal'
                type='button'
                onClick={this.deactivateModal}>
                <span aria-hidden='true'>&times;</span>
              </button>
            </header>

            <div className='modal-body'>
              <ClinicalMedication {...this.props} />
              <MedicationHistory {...this.props} />
            </div>
            <footer className='modal-footer'>
              <button id='demo-one-deactivate'
                onClick={this.deactivateModal}>
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
  modalActive: PropTypes.bool.isRequired
};

export default MedicationHistoryReviewContainer;
