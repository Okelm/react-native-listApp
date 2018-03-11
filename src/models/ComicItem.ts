export interface ComicItem {
  itemId: number;
  title: string;
  imgUrl: string;
}

export type ComicState = {
  rehydrating: boolean;
  isRefreshing: boolean;
  comicsStashed: Array<ComicItem>;
  comicsToShow: Array<ComicItem>;
  lastFetchedId?: number;
};
