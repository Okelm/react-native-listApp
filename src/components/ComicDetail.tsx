import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { ComicItem } from '../models/ComicItem';
import { RootState } from '../reducers';

const comicPlaceholder = require('../../resources/images/comic_placeholder.png');

interface OwnProps extends NavigationScreenProps { }

interface StateProps {
  item: ComicItem;
}

export class ComicDetailComponent extends Component<StateProps> {

  constructor(props: StateProps) {
    super(props);
  }

  render() {
    const { imgUrl } = this.props.item;
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'contain'}
          source={{uri: imgUrl}}
          style={styles.image}
          loadingIndicatorSource={comicPlaceholder}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    flex: 1,
  },
});

const mapStateToProps = (state: RootState, { navigation: { state: { params } } }: OwnProps): StateProps => {
  const comics = state.comics.comics;
  const itemId = params && params.itemId;
  const item = comics.filter((comic) => comic.itemNumber === itemId)[0];

  return { item };
};

export const ComicDetail = connect(mapStateToProps, null)(ComicDetailComponent as any);
