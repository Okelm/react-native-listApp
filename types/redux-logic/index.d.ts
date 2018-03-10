declare module 'redux-logic' {
  import { Action, Dispatch, Middleware } from 'redux';

  export function createLogicMiddleware(logic: any, deps?: any): Middleware;
  export function createLogic(params: any, dispatch?: (action: Action) => void, done?: Done): any;

  export type Done = () => void;
  export type Allow = (action: Action) => void;
  export type Reject = (action?: Action) => void;
  export type Next = (action: Action) => void;
  export type Dispatch<T> = Dispatch<T>;
}
