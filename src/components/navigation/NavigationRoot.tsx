import React from 'react';
import { BackHandler, View } from 'react-native';
import { addNavigationHelpers, NavigationActions, NavigationState, StackNavigator } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import { ComicDetail } from '../ComicDetail';
import { List } from '../List';
import { MainRoutes } from './Routes';

interface StateProps {
  navigation: NavigationState;
}

interface DispatchProps {
  dispatch: any;
}

interface Props extends StateProps, DispatchProps { }

export const RootNavigator = StackNavigator({
  [MainRoutes.LIST]: {
    screen: List,
  },
  [MainRoutes.DETAIL]: {
    screen: ComicDetail,
  },
}, {
  navigationOptions: {
    header: <View />,
  },
});

class NavRootComponent extends React.Component<Props, {}> {

  addListener = createReduxBoundAddListener('root');

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPressed);
  }

  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed);
  }

  onBackPressed = (): boolean => {
    this.props.dispatch(NavigationActions.back({}));
    return true;
  }

  render() {
    return (
      <RootNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation,
          addListener: this.addListener,
        })}
      />
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    navigation: state.navigation,
  };
};

export const NavigationRoot = connect(mapStateToProps)(NavRootComponent);
