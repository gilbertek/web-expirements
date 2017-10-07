import { combineEpics } from 'redux-observable';
import { fetchClinicalMedEpic } from '../ClinicalMedication/reducers/actions';

export default combineEpics(fetchClinicalMedEpic);
