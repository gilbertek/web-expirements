import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import courses from './courses';
import authors from './authors';

export default combineReducers({
  routing,
  courses,
  authors
});
