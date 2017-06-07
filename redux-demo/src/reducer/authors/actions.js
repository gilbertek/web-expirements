import AuthorApi from '../../api/mockAuthorApi';
// Constants
export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';

// Actions
export const fetchAuthorsSuccess = (authors) => ({ type: FETCH_AUTHORS_SUCCESS, authors });

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(fetchAuthorsSuccess(authors));
      }).catch(error => {
        throw (error);
      });
  };
}
