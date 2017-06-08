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


