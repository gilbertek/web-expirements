import {
  FETCH_DRUGS_REQUEST,
  FETCH_DRUGS_BY_NAME_SUCCESS,
  FETCH_DRUGS_BY_NAME_ERROR,

  FETCH_DRUGS_SUCCESS,
  FETCH_DRUGS_ERROR
} from './constants';
import DrugsApi from '../../api/mockDrug';

export const fetchDrugsRequest = () => ({
    type: FETCH_DRUGS_REQUEST
});

export const fetchDrugsByNameSuccess = (response) => ({
    type: FETCH_DRUGS_BY_NAME_SUCCESS,
    response
});

export const fetchDrugsByNameError = (error) => ({
    type:    FETCH_DRUGS_BY_NAME_ERROR,
    message: error.message || 'Something went wrong'
});

export const fetchDrugsSuccess = (response) => ({
    type: FETCH_DRUGS_SUCCESS,
    response
});

export const fetchDrugsError = (error) => ({
    type:    FETCH_DRUGS_ERROR,
    message: error.message || 'Something went wrong'
});

export const fetchDrugsByName = (query) => {
  return (dispatch) => {
    dispatch(fetchDrugsRequest());
    return DrugsApi.fetchDrugsByName(query)
      .then(
        response => dispatch(fetchDrugsByNameSuccess(response)),
        error => dispatch(fetchDrugsByNameError(error))
      )
      .catch(error => { throw new Error(error); });
  };
};

export const fetchDrugs = () => {
  return (dispatch) => {
    dispatch(fetchDrugsRequest());
    return DrugsApi.fetchDrugs()
      .then(
        response => dispatch(fetchDrugsSuccess(response)),
        error => dispatch(fetchDrugsError(error))
      )
      .catch(error => { throw new Error(error); });
  };
};
