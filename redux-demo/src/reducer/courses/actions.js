import CourseApi from '../../api/mockCourseApi';

// Constants
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';

// Actions
export const fetchCoursesSuccess = (courses) => ({ type: FETCH_COURSES_SUCCESS, courses });
export const updateCourseSuccess = (course) => ({ type: UPDATE_COURSE_SUCCESS, course });
export const createCourseSuccess = (course) => ({ type: CREATE_COURSE_SUCCESS, course });

export function loadCourses() {
  return function(dispatch) {
    return CourseApi.getAllCourses()
      .then(courses => {
        dispatch(fetchCoursesSuccess(courses));
      }).catch(error => {
        throw (error);
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    return CourseApi.saveCourse(course)
      .then(course => {
        course.id ? dispatch(updateCourseSuccess(course)) :
          dispatch(createCourseSuccess(course));
      }).catch (error => {
        throw (error);
      });
  };
}

export const updateMedicationList = (medication) => {
  return (dispatch) => {
    return deleteMedication(medication)
      .then(
        response => dispatch(updateMedicationHistorySucceed(response)),
        error => dispatch(updateMedicationHistoryFailed(error)))
      .catch(error => { throw new Error(error); });
  };
};

function deleteMedication(medication) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject('Simulation random failure');
      }
      resolve(medication);
    }, 1000);
  });
}



// const getSelectedDrugForm = (data, itemKey) =>
//   Object.keys(data).find(index => data[index].mmdc === Number(itemKey));

// const getSelectedDrugForm = (data, itemKey) => {
//   return Object.keys(data).find(index => {
//     if (data[index].mmdc === Number(itemKey)) {
//       console.log('getSelectedDrugForm::FOUND::', data[index]);

//       return data[index];
//     }
//   });
// };


const getSelectedDrugForm2 = (data, itemKey) => {
  console.log('::itemKey::', itemKey);

  for (const key in data) {
    console.log('Form Obj::', key);
    console.log('Form Obj in list::', data[key]);
    console.log('Form Obj in list by []::', data[key]['mmdc']);
    console.log('Form Obj in list by dot::', data[key].mmdc);

    console.log('Form Obj in list by []::CHECK::', data[key]['mmdc'] === itemKey);
    console.log('Form Obj in list by dot::CHECK', data[key].mmdc === itemKey);

    if (data[key].mmdc === itemKey) {
      console.log('Obj Found::', key);
      console.log('Obj Found::', data[key]);
      return data[key];
    }
  }
}

const getSelectedDrugForm1 = (data, itemKey) => {
  return Object.keys(data).find((index) => {
    console.log('::NEW FIND::1', data[index]);
    console.log('::NEW FIND::2', data[index].mmdc);
    console.log('::NEW FIND::3', data[index].mmdc === itemKey);

    if (data[index].mmdc === itemKey) {
      return data[index];
    }
  });
};
