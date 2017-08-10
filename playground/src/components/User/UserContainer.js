import { connect } from 'react-redux';
import User from './User';

import {
  fetchEmployee,
  selectedEmployee,
  resetEmployeeList
}  from '../../reducer/users/actions';

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: (value) =>
    dispatch(fetchEmployee(value)),

  resetEmployeeList: () =>
    dispatch(resetEmployeeList()),

  selectEmployee: (emp) =>
    dispatch(selectedEmployee(emp))
});

const mapStateToProps = (state) => {
  return {
    employees: state.users.employees,
    selectedEmployee: state.users.selectedEmployee,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
