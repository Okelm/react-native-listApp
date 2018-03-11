export interface ComicItem {
  itemId: number;
  title: string;
  imgUrl: string;
}

export type ComicState = {
  newestItemId?: number;
  isRefreshing: boolean;
  comics: Array<ComicItem>;
  lastFetchedId?: number;
};
