import {
  FETCH_FORMULARY_SUCCESS,
  FETCH_FORMULARY_ERROR,
  FETCH_FORMULARY_REQUEST,

  SELECT_FORMULARY_MEDICATION_SUCCESS,
  SELECT_FORMULARY_MEDICATION_ERROR,

  SWITCH_FORMULARY_PBM_SUCCESS,
  SWITCH_FORMULARY_PGM_ERROR
} from './constants';

import DrugSearchApi from '../../api/DrugSearchApi';

export const fetchFormularyRequest = () => ({
    type: FETCH_FORMULARY_REQUEST
});

export const fetchFormularyError = (error) => ({
    type:    FETCH_FORMULARY_ERROR,
    message: error.message || 'Something went wrong'
});

export const fetchDrugByName = (query) => {
  return (dispatch) => {
    dispatch(fetchFormularyRequest());

    return DrugSearchApi.fetchDrugByName(query)
      .then(
        response => dispatch(fetchDrugsByNameSuccess(response)),
        error => dispatch(fetchDrugsByNameError(error))
      )
      .catch(error => { throw new Error(error); });
  };
};


