import { Dispatch } from 'redux';
import { createLogic, Done } from 'redux-logic';

import { ActionKey, FetchingActions } from '../actions';
import { ComicItem } from '../models/ComicItem';
import { RootState } from '../reducers';
import { LogicParams } from './';
import { getNewestComic } from './xdcdApi';

const fetchComic = createLogic({
  type: ActionKey.Fetch.GET_COMIC_REQUESTED,
  latest: true,
  process(_: LogicParams<FetchingActions.GetComicRequested>,
          dispatch: Dispatch<RootState>, done: Done) {
    getNewestComic()
      .then((comicItem: ComicItem) => dispatch(FetchingActions.getComicSucceeded(comicItem)))
      .catch((error) => dispatch(FetchingActions.getComicFailed(error)))
      .then(() => done());
  },
});

export const xdcxApiLogic = [
  fetchComic,
];
