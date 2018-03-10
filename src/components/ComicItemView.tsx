import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ComicItem } from '../models/ComicItem';

const comicPlaceholder = require('../../resources/images/comic_placeholder.png');

interface Props {
  item: ComicItem;
  onPress: (itemId: number) => () => void;
}

export const ComicItemView: React.SFC<Props> = ({ item, onPress }) => (
    <View style={styles.cardWithShadow}>
    <TouchableHighlight
      onPress={onPress(item.itemNumber)}
      underlayColor={'#ff00ff00'}
    >
      <View style={styles.contentContainer}>
        <Image
          resizeMode={'contain'}
          source={{uri: item.imgUrl}}
          style={styles.smallButton}
          loadingIndicatorSource={comicPlaceholder}
        />
        <Text>
          {item.title}
        </Text>
      </View>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  cardWithShadow: {
    padding: 16,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 4,
  },
  smallButton: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    minHeight: 100,
    alignItems: 'center',
  },
});
