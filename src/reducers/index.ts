import { combineReducers } from 'redux';
import { NavigationReducerState } from '../models/Navigation';
import { navigationReducer } from './NavigationReducer';

export const rootReducer = combineReducers<RootState>( {
  navigation: navigationReducer,
});

export type RootState = {
  navigation: NavigationReducerState;
};
