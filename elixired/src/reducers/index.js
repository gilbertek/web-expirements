import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import medicationHistory from './MedicationHistory/index';
import clinicalMedications from './clinicalMedications/index';

export default combineReducers({
  routing,
  clinicalMedications,
  medicationHistory
});
