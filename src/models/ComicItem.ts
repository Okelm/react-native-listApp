export interface ComicItem {
  itemNumber: string;
  title: string;
  imgUrl: string;
}

export type ComicState = {
  comics: Array<ComicItem>;
};
