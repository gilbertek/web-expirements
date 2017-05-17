import { combineReducers } from 'redux';
import card from './card';
import deck from './deck';
import sidebar from './sidebar';

export default combineReducers({
  card,
  deck,
  sidebar
});
