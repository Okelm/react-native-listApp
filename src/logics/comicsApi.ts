import { ComicItem } from '../models/ComicItem';

export const getNewestComic = (): Promise<ComicItem> => {
  return handleResponse(fetch('https://xkcd.com/info.0.json'));
};

export const getComic = (itemId: number): Promise<ComicItem> => {
  return handleResponse(fetch(`https://xkcd.com/${itemId}/info.0.json`));
};

const handleResponse = (responsePromise: Promise<Response>): Promise<ComicItem> => {
  return responsePromise
    .then((response) => response.json())
    .then((responseJson) => {
      return {itemId: responseJson.num, title: responseJson.safe_title, imgUrl: responseJson.img};
    });
};