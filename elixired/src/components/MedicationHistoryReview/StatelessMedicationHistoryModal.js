import React from 'react';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import ClinicalMedication from 'app/ClinicalMedication/components/ClinicalMedication';

const MedicationHistoryModal = ({ onClickNext, step, show, onExit, ...rest }) => {
  console.log('MedicationHistoryModal::onClickNext', onClickNext);
  console.log('MedicationHistoryModal::step', step);
  console.log('MedicationHistoryModal::show', show);
  console.log('MedicationHistoryModal::rest', rest);

  return (<AriaModal
    mounted={show}
    titleText={'Medication History Review'}
    applicationNode={document.getElementById('prescription_container')}
    onExit={onExit}
    focusDialog
  >
    <div className="modal-content">
      <header>
        <h3>Medication History Review</h3>
      </header>

      <ClinicalMedication />

      <p className="large-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quo magni maxime optio laboriosam commodi, assumenda dolore,
        alias ea iusto ullam saepe expedita autem soluta possimus
        nostrum ipsum repellendus deserunt similique.
      </p>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quo magni maxime optio laboriosam commodi, assumenda dolore,
          alias ea iusto ullam saepe expedita autem soluta possimus
          nostrum ipsum repellendus deserunt similique.
        </span>
      </p>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Quo magni maxime optio laboriosam commodi, assumenda dolore,
       alias ea iusto ullam saepe expedita autem soluta possimus
       nostrum ipsum repellendus deserunt similique.
      </p>
      <footer>
        <button
          className="primary"
          onClick={onClickNext}
        >Next
        </button>
      </footer>
    </div>
  </AriaModal>);
};

MedicationHistoryModal.propTypes = {
  show:        PropTypes.bool.isRequired,
  onClickNext: PropTypes.func,
  onExit:      PropTypes.func,
  step:        PropTypes.number
};

export default MedicationHistoryModal;
