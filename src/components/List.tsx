import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

export interface Props {

}

export class ListComponent extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Text>
        New app
      </Text>
    );
  }
}

export const List = connect()(ListComponent);
