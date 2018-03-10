import { ActionKey, ActionType } from '../actions';
import { ComicState } from '../models/ComicItem';

export const INITIAL_STATE: ComicState = {
  comics: [],
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
      };
    default:
      return state;
  }
}
