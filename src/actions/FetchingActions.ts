import { ComicItem } from '../models/ComicItem';

export enum ActionKey {
  GET_COMIC_REQUESTED = 'COMIC/GET_COMIC_REQUESTED',
  GET_COMIC_SUCCEEDED = 'COMIC/GET_COMIC_SUCCEEDED',
  GET_COMIC_FAILED = 'COMIC/GET_COMIC_FAILED',
}

export type GetComicRequested = {
  type: ActionKey.GET_COMIC_REQUESTED,
};
export function getComicRequested(): GetComicRequested {
  return {
    type: ActionKey.GET_COMIC_REQUESTED,
  };
}

export type GetComicSucceeded = {
  type: ActionKey.GET_COMIC_SUCCEEDED,
  comicItem: ComicItem,
};
export function getComicSucceeded(comicItem: ComicItem): GetComicSucceeded {
  return {
    type: ActionKey.GET_COMIC_SUCCEEDED,
    comicItem,
  };
}

export type GetComicFailed = {
  type: ActionKey.GET_COMIC_FAILED,
  error: any;
};
export function getComicFailed(error: any): GetComicFailed {
  return {
    type: ActionKey.GET_COMIC_FAILED,
    error,
  };
}

export type FetchingActionsType = GetComicRequested
  | GetComicSucceeded
  | GetComicFailed;
