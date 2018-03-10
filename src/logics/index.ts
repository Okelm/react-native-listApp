import { RootState } from '../reducers';
import { navigationLogic } from './NavigationLogic';
import { xdcxApiLogic } from './xdcdLogic';

export const logic = [
  ...xdcxApiLogic,
  ...navigationLogic,
];

interface ReduxLogicParams<S, A, C> {
  getState: () => S;
  action: A;
  ctx: C;
}

export interface LogicParams<A, C = {}> extends ReduxLogicParams<RootState, A, C> {
}
