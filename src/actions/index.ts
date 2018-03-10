import { FetchingActionsType } from './FetchingActions';
import * as FetchingActions from './FetchingActions';
import { NavActionsType } from './NavActions';
import * as NavActions from './NavActions';

export {
  FetchingActions,
  NavActions,
};

export type ActionType = FetchingActionsType | NavActionsType ;

export const ActionKey = {
  Fetch: FetchingActions.ActionKey,
  Nav: NavActions.ActionKey,
};
