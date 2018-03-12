import { Action } from 'redux';
import { RootNavigator } from '../components/navigation/NavigationRoot';
import { MainRoutes } from '../components/navigation/Routes';
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
