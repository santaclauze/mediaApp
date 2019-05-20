import {
  ON_UPDATE_WATCHED_MOVIES_REQUEST,
  ON_UPDATE_WATCHED_MOVIES_SUCCESS,
  ON_UPDATE_WATCHED_MOVIES_ERROR,
} from './constants';

// The initial application state
export const initialState = {
  formData: null,
  sending: false,
  hasError: false,
  hasSuccess: false,
};

// Takes care of changing the application state
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case ON_UPDATE_WATCHED_MOVIES_REQUEST:
      return state
        .set('sending', true)
        .set('previouslyWatchedMovieList', action.updatedPreviouslyWatchedMovieList)
        .set('hasSuccess', false)
        .set('hasError', false);
    case ON_UPDATE_WATCHED_MOVIES_SUCCESS:
      return state
        .set('sending', false)
        .set('hasSuccess', action.hasSuccess)
        .set('hasError', false);
    case ON_UPDATE_WATCHED_MOVIES_ERROR: // eslint-disable-line no-case-declarations
      return state
        .set('sending', false)
        .set('hasSuccess', false)
        .set('hasError', action.hasError);
    default:
      return state;
  }
}

export default movieReducer;
