import { FetchingActionsType } from './FetchingActions';
import * as FetchingActions from './FetchingActions';

export {
  FetchingActions,
};

export type ActionType = FetchingActionsType ;

export const ActionKey = {
  Fetch: FetchingActions.ActionKey,
};
