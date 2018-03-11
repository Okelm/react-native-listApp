import { RootState } from '../reducers';
import { navigationLogic } from './NavigationLogic';
import { comicsApiLogic } from './comicsLogic';

export const logic = [
  ...comicsApiLogic,
  ...navigationLogic,
];

interface ReduxLogicParams<S, A, C> {
  getState: () => S;
  action: A;
  ctx: C;
}

export interface LogicParams<A, C = {}> extends ReduxLogicParams<RootState, A, C> {
}
