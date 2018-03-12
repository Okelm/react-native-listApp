import { ActionKey, ActionType } from '../actions';
import { itemsLimit } from '../components/List';
import { ComicState } from '../models/ComicItem';

// To show how stashing works, the comics starts from the 1949 item, but the newest is more than 1965
export const INITIAL_STATE: ComicState = {
  rehydrating: true,
  isRefreshing: false,
  comicsStashed: [],
  comicsToShow: [{
    itemId: 1949,
    title: 'Fruit Collider',
    imgUrl: 'https://imgs.xkcd.com/comics/fruit_collider.png',
  }],
  lastFetchedId: 1949,
  error: undefined,
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
            ...state.comicsStashed.slice(0, itemsLimit - state.comicsToShow.length),
          ] : [
            ...state.comicsToShow,
            action.comicItem,
          ],
        lastFetchedId: unstashOldComics ? state.comicsStashed.pop()!!.itemId : action.comicItem.itemId,
        comicsStashed: unstashOldComics ? [] : state.comicsStashed,
        error: undefined,
      };
    case ActionKey.Fetch.GET_NEWEST_COMIC_PROCEEDING:
      return {
        ...state,
        isRefreshing: true,
      };
    case ActionKey.Fetch.GET_NEWEST_COMIC_SUCCEEDED:
      const stashOldComics = state.comicsToShow[0].itemId < action.item.itemId;
      return stashOldComics ? {
        ...state,
        comicsStashed: state.comicsToShow,
        comicsToShow: [action.item],
        lastFetchedId: action.item.itemId,
        isRefreshing: false,
        error: undefined,
      } : {
        ...state,
        isRefreshing: false,
        error: undefined,
      };
    case ActionKey.Nav.REHYDRATION_COMPLETED:
      return {
        ...state,
        rehydrating: false,
      };
    case ActionKey.Fetch.GET_NEWEST_COMIC_FAILED:
    case ActionKey.Fetch.GET_COMIC_FAILED:
      return {
        ...state,
        isRefreshing: false,
        error: 'Something bad has happened...',
      };
    case ActionKey.Fetch.GET_COMIC_FAILED_DISMISSED:
      return {
        ...state,
        error: undefined,
      };
    default:
      return state;
  }
}
