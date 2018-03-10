import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationRoot } from './components/NavigationRoot';
import { store } from './store';

export const App = () => (
  <View style={styles.root}>
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <NavigationRoot />
      </View>
    </Provider>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
