import {
  FETCH_FORMULARY_SUCCESS,
  FETCH_FORMULARY_ERROR,
  FETCH_FORMULARY_REQUEST,

  SELECT_FORMULARY_MEDICATION_SUCCESS,
  SELECT_FORMULARY_MEDICATION_ERROR,

  SWITCH_FORMULARY_PBM_SUCCESS,
  SWITCH_FORMULARY_PGM_ERROR
} from './constants';

import DrugSearchApi from '../../api/mockDrugSearchByName';

export const fetchFormularyRequest = () => ({
  type: FETCH_FORMULARY_REQUEST
});

export const fetchFormularyError = (error) => ({
  type:    FETCH_FORMULARY_ERROR,
  message: error.message || 'Something went wrong'
});

export const fetchFormularyDrugSuccess = (response) => ({
  type: FETCH_FORMULARY_SUCCESS,
  response
});

export const fetchFormularyDrug = (query) => {
  return (dispatch) => {
    dispatch(fetchFormularyRequest());

    return DrugSearchApi.fetchDrugByName(query)
      .then(
        response => dispatch(fetchFormularyDrugSuccess(response)),
        error => dispatch(fetchFormularyError(error))
      )
      .catch(error => { throw new Error(error); });
  };
};

