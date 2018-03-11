import { ActionKey, ActionType } from '../actions';
import { ComicState } from '../models/ComicItem';

export const INITIAL_STATE: ComicState = {
  rehydrating: true,
  newestItemId: undefined,
  isRefreshing: false,
  comicsStashed: [],
  comicsToShow: [{
    itemId: 1949,
    title: 'Fruit Collider',
    imgUrl: 'https://imgs.xkcd.com/comics/fruit_collider.png',
  }],
  lastFetchedId: 1949,
};

export function comicsReducer(state: ComicState = INITIAL_STATE, action: ActionType): ComicState {
  switch (action.type) {
    case ActionKey.Fetch.GET_COMIC_SUCCEEDED:
      const unstashOldComics = state.comicsStashed.find((comic) => comic.itemId === action.comicItem.itemId);
      return {
        ...state,
        comicsToShow: unstashOldComics ?
          [
            ...state.comicsToShow,
            ...state.comicsStashed,
          ] : [
            ...state.comicsToShow,
            action.comicItem,
          ],
        lastFetchedId: unstashOldComics ? state.comicsStashed.pop()!!.itemId : action.comicItem.itemId,
        comicsStashed: unstashOldComics ? [] : state.comicsStashed,
      };
    case ActionKey.Fetch.GET_NEWEST_COMIC_PROCEEDING:
      return {
        ...state,
        isRefreshing: true,
      };
    case ActionKey.Fetch.GET_NEWEST_COMIC_SUCCEEDED:
      const stashOldComics = state.comicsToShow.find((comic) => comic.itemId < action.item.itemId);
      return stashOldComics ? {
        ...state,
        comicsStashed: state.comicsToShow,
        comicsToShow: [action.item],
        newestItemId: action.item.itemId,
        lastFetchedId: action.item.itemId,
        isRefreshing: false,
      } : {
        ...state,
        isRefreshing: false,
      };
    case ActionKey.Nav.REHYDRATION_COMPLATED:
      return {
        ...state,
        rehydrating: false,
      };
    default:
      return state;
  }
}
