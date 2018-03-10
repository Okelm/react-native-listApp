import { Action } from 'redux';
import { RootNavigator } from '../components/NavigationRoot';
import { MainRoutes } from '../components/Routes';
import { NavigationReducerState } from '../models/Navigation';

const initialState: NavigationReducerState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(MainRoutes.LIST),
);

export function navigationReducer(state: NavigationReducerState = initialState,
                                  action: Action): NavigationReducerState {
  switch (action.type) {
    default:
      const nextState = RootNavigator.router.getStateForAction(action, state);
      return nextState || state;
  }
}
