import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { FetchingActions, NavActions } from '../actions';
import { ComicItem } from '../models/ComicItem';
import { RootState } from '../reducers';
import { ComicItemView } from './ComicItemView';

const getComicKey: (comic: ComicItem) => string =
  (message) => message.itemNumber;

export interface StateProps {
  comics: Array<ComicItem>;
}

export interface DispatchProps {
  getNewestComic: () => void;
  navigateToDetailView: (itemId: string) => () => void;
}

export class ListComponent extends Component<StateProps & DispatchProps> {

  constructor(props: StateProps & DispatchProps) {
    super(props);
  }

  renderLoadingIndicator() {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  renderItem = ({ item }: { item: ComicItem }) => {
    return (
      <ComicItemView
        item={item}
        onPress={this.props.navigateToDetailView}
      />
    );
  }

  onEndReached = () => {
    this.props.getNewestComic();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          scrollEventThrottle={1}
          inverted={true}
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          data={this.props.comics}
          keyExtractor={getComicKey}
          renderItem={this.renderItem}
          ListFooterComponent={this.renderLoadingIndicator()}
          onEndReachedThreshold={0.01}
          onEndReached={this.onEndReached}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  } as ViewStyle,
  contentContainer: {
    paddingBottom: 20,
  } as ViewStyle,
  loadingIndicator: {
    height: 38,
    justifyContent: 'center',
  } as ViewStyle,
});

const mapStateToProps = (state: RootState): StateProps => {
  return {
    comics: state.comics.comics,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): DispatchProps => {
  return {
    getNewestComic: () => dispatch(FetchingActions.getComicRequested()),
    navigateToDetailView: (itemId) => () => dispatch(NavActions.navigationToDetailRequested(itemId)),
  };
};

export const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent as any);
