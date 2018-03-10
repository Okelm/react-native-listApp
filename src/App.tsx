import React, { Component } from 'react';
import {
  View,
} from 'react-native';

interface State {
  showPopup: boolean;
}

export class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }
  render() {
    return (
      <View />
    );
  }
}
