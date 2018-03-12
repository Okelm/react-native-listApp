import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { connect, Dispatch } from 'react-redux';
import { FetchingActions, NavActions } from '../actions';
import { ComicItem } from '../models/ComicItem';
import { RootState } from '../reducers';
import { ComicItemView } from './ComicItemView';

export const itemsLimit = 50;

const getComicKey: (comic: ComicItem) => string =
  (comic) => comic.itemId.toString();

export interface StateProps {
  comics: Array<ComicItem>;
  isRefreshing: boolean;
  rehydrating: boolean;
  error?: string;
}

export interface DispatchProps {
  getNewestComic: () => void;
  getMoreComics: () => void;
  navigateToDetailView: (itemId: number) => () => void;
}

export class ListComponent extends Component<StateProps & DispatchProps> {

  constructor(props: StateProps & DispatchProps) {
    super(props);
  }

  isLimitReached = (): boolean => this.props.comics.length >= itemsLimit;

  shouldRenderList = (): boolean => this.props.comics[0] && !this.props.rehydrating;

  renderFooter() {
    return this.props.error ? (
      null
    ) : (
      this.renderHeader()
    );
  }

  renderHeader() {
    return this.isLimitReached() ? (
      <View>
        <Text style={styles.limitContainer}>
         Sky is the limit. Welcome in the sky :)
        </Text>
      </View>
    ) : (
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

  renderSeparator = () => {
    return (
      <View style={{minHeight: 10}}/>
    );
  }

  onEndReached = () => {
    if (!this.isLimitReached()) {
      this.props.getMoreComics();
    }
  }

  render() {
    const { container, contentContainer } = styles;
    return this.shouldRenderList() ? (
      <View style={{ flex: 1 }}>
        <FlatList
          scrollEventThrottle={1}
          inverted={true}
          style={container}
          contentContainerStyle={contentContainer}
          data={this.props.comics}
          keyExtractor={getComicKey}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter()}
          onRefresh={this.props.getNewestComic}
          refreshing={this.props.isRefreshing}
          onEndReachedThreshold={2}
          onEndReached={this.onEndReached}
        />
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  contentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  } as ViewStyle,
  loadingIndicator: {
    height: 38,
    justifyContent: 'center',
  } as ViewStyle,
  limitContainer: {
    padding: 20,
    alignSelf: 'center',
  } as ViewStyle,
});

const mapStateToProps = (state: RootState): StateProps => {
  return {
    comics: state.comics.comicsToShow,
    isRefreshing: state.comics.isRefreshing,
    rehydrating: state.comics.rehydrating,
    error: state.comics.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>): DispatchProps => {
  return {
    getNewestComic: () => dispatch(FetchingActions.getNewestComicRequested()),
    getMoreComics: () => dispatch(FetchingActions.getComicRequested()),
    navigateToDetailView: (itemId) => () => dispatch(NavActions.navigationToDetailRequested(itemId)),
  };
};

export const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent as any);
