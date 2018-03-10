declare module 'react-navigation-redux-helpers' {
  import { NavigationEventCallback, NavigationEventSubscription, NavigationState } from 'react-navigation';
  import { Middleware } from 'redux';

  export function createReactNavigationReduxMiddleware<S>(
    key: string,
    getNavigationState: (S) => NavigationState,
  ): Middleware;

  export function createReduxBoundAddListener(key: string): AddListener;

  type AddListener = (eventName: string, callback: NavigationEventCallback) => NavigationEventSubscription;
}
