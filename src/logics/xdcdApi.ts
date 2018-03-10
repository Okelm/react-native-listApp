import { ComicItem } from '../models/ComicItem';

export const getNewestComic = (): Promise<ComicItem> => {
  return fetch('https://xkcd.com/info.0.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return {itemNumber: responseJson.num, title: responseJson.safe_title, imgUrl: responseJson.img};
    });
};
