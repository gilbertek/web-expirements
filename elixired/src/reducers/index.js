import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import medicationHistory from './MedicationHistory';
import clinicalMedications from './clinicalMedications';
import prescription from './prescription';
import medication from './medication';

export default combineReducers({
  routing,
  clinicalMedications,
  medicationHistory,
  prescription,
  medication
});
