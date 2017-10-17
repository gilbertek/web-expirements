import { combineEpics } from 'redux-observable';
import { clearStoriesEpic, loadStoriesEpic } from '../reducers/stories/epics';

export default combineEpics(loadStoriesEpic, clearStoriesEpic);
