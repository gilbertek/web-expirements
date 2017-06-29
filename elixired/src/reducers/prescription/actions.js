import {
  FETCH_DRUGS_REQUEST,
  FETCH_DRUGS_BY_TITLE_SUCCESS,
  FETCH_DRUGS_BY_TITLE_ERROR,

  FETCH_DRUGS_SUCCESS,
  FETCH_DRUGS_ERROR
} from './constants';
import DrugsApi from '../../api/mockDrug';


export const fetchDrugsRequest = () => ({
    type: FETCH_DRUGS_REQUEST
});


export const fetchDrugsByTitleSuccess = ({ data }) => ({
    type: FETCH_DRUGS_BY_TITLE_SUCCESS,
    ...data
});

export const fetchDrugsByTitleError = (error) => ({
    type:    FETCH_DRUGS_BY_TITLE_ERROR,
    message: error.message || 'Something went wrong'
});


export const fetchDrugsSuccess = ({ data }) => ({
    type: FETCH_DRUGS_SUCCESS,
    ...data
});

export const fetchDrugsError = (error) => ({
    type:    FETCH_DRUGS_ERROR,
    message: error.message || 'Something went wrong'
});
