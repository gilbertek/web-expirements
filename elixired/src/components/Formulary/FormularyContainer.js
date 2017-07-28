import { connect } from 'react-redux';
import {
  fetchFormularyDrug
} from '../../reducers/formulary/actions';
import Formulary from './Formulary';

const mapStateToProps = (state) => {
  let formulary;
  if (state.formulary) {
    formulary = state.formulary.response;
  }

  return {
    fetched:      state.formulary.fetched,
    isLoading:    state.formulary.isLoading,
    errorMessage: state.formulary.message,
    formulary
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFormularyDrug: (drugName) => {
    dispatch(fetchFormularyDrug(drugName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Formulary);

