import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import MedicationHistoryListItem from './MedicationHistoryListItem';

const getUniqueDrug = (args) =>
  _.uniqWith(args, ((first, second) =>
    first.DrugDescription === second.DrugDescription
));


const sortByLastFillDate = (args) =>
  _.sortBy(args, 'LastFillDate.Date').reverse();

const getLastNinetyDays = (args) => {
  const nDays = 90 * 24 * 60 * 60 * 1000;
  const ninethyDays = new Date((new Date()).getTime() - nDays);

  const result = _.reduce(args, ((accum, item) => {
    if (new Date(item.LastFillDate.Date) >= ninethyDays) {
      accum.push(item);
    }
    return accum;
  }), []);

  return result;
};

const styles = {
  columnOneOfThree: {
    width: '30%'
  },
  columnTwoOfThree: {
    width: '60%'
  },
  disclaimer: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  columnSixtyPercent: {
    width: '60%'
  },
  columnFourtyPercent: {
    width: '40%'
  },
  columnFifTeenPercent: {
    width: '15%'
  },
  columnTwentyPercent: {
    width: '20%'
  },
  columnThirtyPercent: {
    width: '30%'
  },
  columnThirtyFivePercent: {
    width: '35%'
  }
};

const ShowDisclaimer = () =>
  (
    <div className='disclaimer'
      style={styles.disclaimer}>
      <strong>Disclaimer</strong>
      <p>Certain information may not be available or accurate in this report,
        including items that the patient asked not be disclosed due to
        patient privacy concerns, over-the-counter medications,
        low cost prescriptions, prescriptions paid for by the patient or
        non-participating sources, or errors in insurance claims information.
        The provider should independently verify medication history with the
        patient.
      </p>
    </div>
  );

const MedicationHistoryList = (props) => {
  const { medicationRecords, showMore, editMode, onChange } = props;
  const patient = medicationRecords.Patient;
  const medicationDispensed = (
    showMore
    ? sortByLastFillDate(
        getUniqueDrug(
          medicationRecords.MedicationDispensed
        )
      )
    : sortByLastFillDate(
        getUniqueDrug(
          getLastNinetyDays(
            medicationRecords.MedicationDispensed
          )
        )
      )
    );
  const columnStyle = editMode
                    ? styles.columnTwentyPercent
                    : styles.columnFortyPercent;

  return (
    <div className='medication-history-list'>
      <div className='table-row header'>
        <div className='text'>Medication</div>
        <div className='date-text'>Last Fill Date</div>
        { editMode
          &&
          <div className='text'>Patient Currently Taking?</div>
        }
      </div>
      {
        medicationDispensed.length !== 0
        ? medicationDispensed.map((prescription, index) =>
          <MedicationHistoryListItem
            prescription={prescription}
            patient={patient}
            editMode={editMode}
            key={index}
            onChange={onChange}
          />)
        : <div className='text'>
            <p>There is no medication history to display.</p>
          </div>
      }
      { editMode && <ShowDisclaimer />}
    </div>
  );
};

MedicationHistoryList.propTypes = {
  medicationRecords: PropTypes.object.isRequired,
  showMore:          PropTypes.bool.isRequired,
  editMode:          PropTypes.bool.isRequired,
  onChange:          PropTypes.func.isRequired
};

export default MedicationHistoryList;
