import { Observable } from 'rxjs';
import {
  LOAD_STORIES,
  CLEAR_STORIES,
  loadStories,
  clearStories,
} from './actions';

export const loadStoriesEpic = action$ => {
  return action$.ofType(LOAD_STORIES).switchMap(() => {
    return Observable.concat(
      Observable.of(loadStories()),
      Observable.of(clearStories())
    );
  });

  // return action$.do(action => console.log(action)).ignoreElements();
};

export const clearStoriesEpic = action$ => {
  return action$
    .ofType(CLEAR_STORIES)
    .debounce(350)
    .switchMap(() => Observable.of(clearStories()));
};
