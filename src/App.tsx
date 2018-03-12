import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { isAndroid } from './assets';
import { InappNotification } from './components/InappNotification';
import { NavigationRoot } from './components/navigation/NavigationRoot';
import { store } from './store';

export const App = () => (
  <View style={styles.root}>
    <Provider store={store}>
      <View style={styles.container}>
        <InappNotification />
        <NavigationRoot />
      </View>
    </Provider>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: isAndroid ? 0 : 20,
  },
});
