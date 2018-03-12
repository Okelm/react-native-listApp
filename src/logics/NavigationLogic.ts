import { NavigationActions } from 'react-navigation';
import { Dispatch } from 'react-redux';
import { createLogic, Done } from 'redux-logic';
import { ActionKey, NavActions } from '../actions';
import { MainRoutes } from '../components/navigation/Routes';
import { RootState } from '../reducers';
import { LogicParams } from './index';

const navigateToDetailsRequested = createLogic({
  type: ActionKey.Nav.NAVIGATE_TO_DETAILS_REQUESTED,
  latest: true,
  throttle: 1000,
  process({ action }: LogicParams<NavActions.NavigationToDetailRequested>,
    dispatch: Dispatch<RootState>, done: Done) {
    dispatch(NavigationActions.navigate({
      routeName: MainRoutes.DETAIL,
      params: {
        itemId: action.itemId,
      },
    }));
    done();
  },
});

export const navigationLogic = [
  navigateToDetailsRequested,
];
