import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import autosuggest from './medication';
import users from './users';

export default combineReducers({
  routing,
  autosuggest,
  users
});
