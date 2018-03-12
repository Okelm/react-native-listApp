import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ViewStyle } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { FetchingActions } from '../actions';
import { RootState } from '../reducers';

interface StateProps {
  error?: string;
}

interface DispatchProps {
  hideNotification: () => void;
}

type Props = StateProps & DispatchProps;

class InappNotificationComponent extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { error } = this.props;
    return error ? (
      <TouchableHighlight
        onPress={this.props.hideNotification}
        underlayColor={'#ff11ff11'}
      >
        <View style={styles.errorView}>
          <Text>{error}</Text>
        </View>
      </TouchableHighlight>
    ) : null;
  }
}

const styles = StyleSheet.create({
  errorView: {
    padding: 20,
    alignSelf: 'center',
  } as ViewStyle,
});

const mapStateToProps = (state: RootState): StateProps => ({
  error: state.comics.error,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>): DispatchProps => ({
  hideNotification: () => dispatch(FetchingActions.getNewestComicFailedDismissed()),
});

export const InappNotification = connect(mapStateToProps, mapDispatchToProps)(InappNotificationComponent);
