import CourseApi from '../../api/mockCourseApi';

// Constants
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const CREATE_COURSE = 'CREATE_COURSE';

// Actions
export function fetchCoursesSuccess(courses) {
  return { type: FETCH_COURSES_SUCCESS, courses };
}

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}

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

