import { ComicItem } from '../models/ComicItem';

export const getNewestComic = (): Promise<ComicItem> => {
  return fetch('https://xkcd.com/info.0.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return {itemId: responseJson.num, title: responseJson.safe_title, imgUrl: responseJson.img};
    });
};

export const getComic = (itemId: number): Promise<ComicItem> => {
  return fetch(`https://xkcd.com/${itemId}/info.0.json`)
    .then((response) => response.json())
    .then((responseJson) => {
      return {itemId: responseJson.num, title: responseJson.safe_title, imgUrl: responseJson.img};
    });
};
