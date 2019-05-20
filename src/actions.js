import { ON_UPDATE_WATCHED_MOVIES_REQUEST, ON_UPDATE_WATCHED_MOVIES_SUCCESS, ON_UPDATE_WATCHED_MOVIES_ERROR } from './constants';

export function onUpdateWatchedMoviesRequest(updatedPreviouslyWatchedMovieList) {
  return { type: ON_UPDATE_WATCHED_MOVIES_REQUEST, updatedPreviouslyWatchedMovieList };
}

export function onUpdateWatchedMoviesSuccess(hasSuccess) {
  return { type: ON_UPDATE_WATCHED_MOVIES_SUCCESS, hasSuccess };
}

export function onUpdateWatchedMoviesError(hasError) {
  return { type: ON_UPDATE_WATCHED_MOVIES_ERROR, hasError };
}
