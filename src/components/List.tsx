import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { FetchingActions } from '../actions';
import { RootState } from '../reducers';

export interface Props {

}

export interface DispatchProps {
  getNewestComic: () => void;
}

export class ListComponent extends Component<Props & DispatchProps> {

  constructor(props: Props & DispatchProps) {
    super(props);
  }

  componentDidMount() {
    this.props.getNewestComic();
  }

  render() {
    return (
      <Text>
        New app
      </Text>
    );
  }
}

const mapStateToProps = (): any => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): DispatchProps => {
  return {
    getNewestComic: () => dispatch(FetchingActions.getComicRequested()),
  };
};

export const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent);
