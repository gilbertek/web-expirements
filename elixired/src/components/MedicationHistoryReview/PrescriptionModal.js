import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import Formulary from 'app/Formulary';
import Prescription from './Prescription';

class PrescriptionModal extends Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };
    console.log('PrescriptionModal::STATE::', this.state);
    console.log('PrescriptionModal::PROPS::', this.props);
  }

  render() {
    const { memberId, drugName, step, show, onClickNext, onExit } = this.props;

    return (
      <div className="">
        <AriaModal
          mounted={show}
          titleText={'Prescription'}
          applicationNode={document.getElementById('prescription_container')}
          onExit={onExit}
          focusDialog
        >
          <div className="modal-content">
            <header>
              <button
                className="header-close-btn"
                aria-labelledby="header-close-hint"
                onClick={onExit}
              >
                ✖
              </button>
              <span
                id="header-close-hint"
                className="header-close-hint"
              >
                Close modal
              </span>
            </header>

            <h2>Prescription</h2>

            <Prescription />
            <Formulary drugName={drugName} />

            <footer>
              <button
                className="primary"
                onClick={onClickNext}
              >Next
              </button>
            </footer>
          </div>
        </AriaModal>
      </div>
    );
  }
}

PrescriptionModal.propTypes = {
  show:        PropTypes.bool.isRequired,
  onClickNext: PropTypes.func,
  onExit:      PropTypes.func,
  step:        PropTypes.number,
  memberId:    PropTypes.number,
  drugName:    PropTypes.string
};

export default PrescriptionModal;
