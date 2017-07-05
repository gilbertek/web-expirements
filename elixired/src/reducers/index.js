import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import medicationHistory from './MedicationHistory';
import clinicalMedications from './clinicalMedications';
import prescription from './prescription';

export default combineReducers({
  routing,
  clinicalMedications,
  medicationHistory,
  prescription,
});
