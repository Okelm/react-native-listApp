import { ActionKey, ActionType } from '../actions';
import { ComicState } from '../models/ComicItem';

export const INITIAL_STATE: ComicState = {
  newestItemId: undefined,
  isRefreshing: false,
  comics: [],
  lastFetchedId: undefined,
};

export function comicsReducer(state: ComicState = INITIAL_STATE, action: ActionType): ComicState {
  switch (action.type) {
    case ActionKey.Fetch.GET_COMIC_SUCCEEDED:
      return {
        ...state,
        comics: [
          ...state.comics,
          action.comicItem,
        ],
        lastFetchedId: action.comicItem.itemId,
      };
    case ActionKey.Fetch.GET_NEWEST_COMIC_PROCEEDING:
      return {
        ...state,
        isRefreshing: true,
      };
    case ActionKey.Fetch.GET_NEWEST_COMIC_SUCCEEDED:
      return {
        ...state,
        isRefreshing: false,
        lastFetchedId: action.item.itemId,
      };
    default:
      return state;
  }
}
