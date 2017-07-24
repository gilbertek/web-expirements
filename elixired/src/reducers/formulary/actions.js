import {
  FETCH_FORMULARY_SUCCESS,
  FETCH_FORMULARY_ERROR,
  FETCH_FORMULARY_REQUEST,

  SELECT_FORMULARY_MEDICATION_SUCCESS,
  SELECT_FORMULARY_MEDICATION_ERROR,

  SWITCH_FORMULARY_PBM_SUCCESS,
  SWITCH_FORMULARY_PGM_ERROR
} from './constants';

import DrugsApi from '../../api/';

export const fetchFormularyError = (error) => ({
    type:    FETCH_FORMULARY_ERROR,
    message: error.message || 'Something went wrong'
});

export const fetchDrugsByName = (query) => {
  return (dispatch) => {
    dispatch(fetchFormularyRequest());

    return DrugsApi.fetchDrugsByName(query)
      .then(
        response => dispatch(fetchDrugsByNameSuccess(response)),
        error => dispatch(fetchDrugsByNameError(error))
      )
      .catch(error => { throw new Error(error); });
  };
};


