import React from 'react';
import 'react-native';
import { View } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
   renderer.create(
    <View />,
  );
});
