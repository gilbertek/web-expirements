import { Observable } from 'rxjs';
import { clearStories, LOAD_STORIES } from './actions';

export const loadStoriesEpic = action$ => {
  return action$.ofType(LOAD_STORIES).switchMap(() => {
    console.log('Inside a switchmap...');
    return Observable.of(clearStories()).delay(200);
  });

  // return action$.do(action => console.log(action)).ignoreElements();
};
