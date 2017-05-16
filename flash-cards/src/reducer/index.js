import { combineReducers } from 'redux';
import card from './card';
import deck from './deck';

export default combineReducers({
  card,
  deck
});
