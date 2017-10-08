import { combineEpics } from 'redux-observable';
import { loadStoriesEpic } from '../reducers/stories/epics';

export default combineEpics(loadStoriesEpic);
