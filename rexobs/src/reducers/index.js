import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import stories from './stories';

export default combineReducers({
  routing,
  stories,
});
