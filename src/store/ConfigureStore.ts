import { AsyncStorage } from 'react-native';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from 'redux-logic';
import { autoRehydrate, persistStore } from 'redux-persist';
import { logic } from '../logics';
import { rootReducer, RootState } from '../reducers';

declare let module: any;

export function configureStore() {
  const reduxMiddleware = createReactNavigationReduxMiddleware('root', (state: RootState) => state.navigation);
  const logicMiddleware = createLogicMiddleware(logic);

  const enhancer = composeWithDevTools(
    applyMiddleware(
      reduxMiddleware,
      logicMiddleware,
    ),
    autoRehydrate(),
  );

  const store = createStore(
    rootReducer,
    enhancer,
  );

  const persistConfig = {
    storage: AsyncStorage,
  };

  persistStore(store, persistConfig);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
