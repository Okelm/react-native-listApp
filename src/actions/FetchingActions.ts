import { ComicItem } from '../models/ComicItem';

export enum ActionKey {
  GET_COMIC_REQUESTED = 'COMIC/GET_COMIC_REQUESTED',
  GET_COMIC_SUCCEEDED = 'COMIC/GET_COMIC_SUCCEEDED',
  GET_COMIC_FAILED = 'COMIC/GET_COMIC_FAILED',
  GET_NEWEST_COMIC_REQUESTED = 'COMIC/GET_NEWEST_COMIC_REQUESTED',
  GET_NEWEST_COMIC_SUCCEEDED = 'COMIC/GET_NEWEST_COMIC_SUCCEEDED',
  GET_NEWEST_COMIC_FAILED = 'COMIC/GET_NEWEST_COMIC_FAILED ',
  GET_NEWEST_COMIC_PROCEEDING = 'COMIC/GET_NEWEST_COMIC_PROCEEDING',
  GET_COMIC_FAILED_DISMISSED = 'COMIC/GET_COMIC_FAILED_DISMISSED',
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

export type GetNewestComicRequested = {
  type: ActionKey.GET_NEWEST_COMIC_REQUESTED,
};
export function getNewestComicRequested(): GetNewestComicRequested {
  return {
    type: ActionKey.GET_NEWEST_COMIC_REQUESTED,
  };
}

export type GetNewestComicSucceeded = {
  type: ActionKey.GET_NEWEST_COMIC_SUCCEEDED,
  item: ComicItem,
};
export function getNewestComicSucceeded(item: ComicItem): GetNewestComicSucceeded {
  return {
    type: ActionKey.GET_NEWEST_COMIC_SUCCEEDED,
    item,
  };
}

export type GetNewestComicFailed = {
  type: ActionKey.GET_NEWEST_COMIC_FAILED,
  error: any;
};
export function getNewestComicFailed(error: any): GetNewestComicFailed {
  return {
    type: ActionKey.GET_NEWEST_COMIC_FAILED,
    error,
  };
}

export type GetNewestComicProceeding = {
  type: ActionKey.GET_NEWEST_COMIC_PROCEEDING,
};
export function getNewestComicProceeding(): GetNewestComicProceeding {
  return {
    type: ActionKey.GET_NEWEST_COMIC_PROCEEDING,
  };
}

export type GetNewestComicFailedDismissed = {
  type: ActionKey.GET_COMIC_FAILED_DISMISSED,
};
export function getNewestComicFailedDismissed(): GetNewestComicFailedDismissed {
  return {
    type: ActionKey.GET_COMIC_FAILED_DISMISSED,
  };
}

export type FetchingActionsType = GetComicRequested
  | GetComicSucceeded
  | GetComicFailed
  | GetNewestComicRequested
  | GetNewestComicSucceeded
  | GetNewestComicFailed
  | GetNewestComicProceeding
  | GetNewestComicFailedDismissed;
