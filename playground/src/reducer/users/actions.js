import {
  FETCH_EMPLOYEE,
  SELECTED_EMPLOYEE,
  RESET_EMPLOYEE_LIST
} from './constants';
import DrugApi from '../../api/mockDrug';

export function updateEmployee(data) {
  return {
    type: FETCH_EMPLOYEE,
    payload: data,
  };
}

export function resetEmployeeList() {
  return {
    type: RESET_EMPLOYEE_LIST,
  };
}

export function selectedEmployee(emp) {
  return {
    type: SELECTED_EMPLOYEE,
    payload: emp,
  };
}

export function fetchEmployee(searchToken) {
  console.log('Searchin...', searchToken);
  return ((dispatch) => {
    return DrugApi.fetchDrugsByName(searchToken)
      .then(
        response => dispatch(updateEmployee(response))
      ).catch(error => { throw new Error(error); });
    // const Employee = Parse.Object.extend('Employee');
    // const query = new Parse.Query(Employee);
    // query.matches('name', searchToken, 'i');
    // query.find(qp).then((result) => {
    //   const data = result.map(mapper);
    //   dispatch(updateEmployee(data));
    // });
  });
}
