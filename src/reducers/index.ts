import { combineReducers } from 'redux';
import { ComicState } from '../models/ComicItem';
import { NavigationReducerState } from '../models/Navigation';
import { comicsReducer } from './ComicsReducer';
import { navigationReducer } from './NavigationReducer';

export const rootReducer = combineReducers<RootState>( {
  navigation: navigationReducer,
  comics: comicsReducer,
});

export type RootState = {
  navigation: NavigationReducerState;
  comic: ComicState;
};
