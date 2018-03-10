export interface ComicItem {
  itemNumber: number;
  title: string;
  imgUrl: string;
}

export type ComicState = {
  comics: Array<ComicItem>;
};
