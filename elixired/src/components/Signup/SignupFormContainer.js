import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import {
  validateForm,
  setFormField,
  resetForm,
  submitForm
} from '../../reducers/signup/actions';

const mapStateToProps = state => {
  return {
    formSubmit: state.signup.formSubmit,
    validation: state.signup.validation,
    profile: state.signup.profile
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (field, value, formData) => {
    dispatch(setFormField(field, value));
    dispatch(validateForm(formData));
  },
  onCancel: () =>
    dispatch(resetForm()),

  onSignup: formData => {
    dispatch(submitForm(formData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
