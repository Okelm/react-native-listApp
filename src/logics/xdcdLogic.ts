import { Dispatch } from 'redux';
import { createLogic, Done } from 'redux-logic';

import { ActionKey, FetchingActions } from '../actions';
import { ComicItem } from '../models/ComicItem';
import { RootState } from '../reducers';
import { LogicParams } from './';
import { getComic, getNewestComic } from './xdcdApi';

const fetchComicLogic = createLogic({
  type: ActionKey.Fetch.GET_COMIC_REQUESTED,
  latest: true,
  process({ getState }: LogicParams<FetchingActions.GetComicRequested>,
          dispatch: Dispatch<RootState>, done: Done) {
    const lastItemId = getState().comics.lastFetchedId;
    const fetchComic = lastItemId ? getComic(lastItemId - 1) : getNewestComic();

    fetchComic
      .then((comicItem: ComicItem) => dispatch(FetchingActions.getComicSucceeded(comicItem)))
      .catch((error) => dispatch(FetchingActions.getComicFailed(error)))
      .then(() => done());
  },
});

export const xdcxApiLogic = [
  fetchComicLogic,
];
