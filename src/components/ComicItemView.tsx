import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ComicItem } from '../models/ComicItem';

const comicPlaceholder = require('../../resources/images/comic_placeholder.png');

interface Props {
  item: ComicItem;
  onPress: (itemId: number) => () => void;
}

export const ComicItemView: React.SFC<Props> = ({ item, onPress }) => (
    <TouchableHighlight
      onPress={onPress(item.itemId)}
      underlayColor={'#ff11ff11'}
    >
      <View style={styles.cardWithShadow}>
        <Image
          resizeMode={'contain'}
          source={{uri: item.imgUrl}}
          style={styles.image}
          loadingIndicatorSource={comicPlaceholder}
        />
        <Text style={styles.text}>
          {item.title}
        </Text>
      </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
  cardWithShadow: {
    flexDirection: 'row',
    minHeight: 100,
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
  image: {
    flex: 1,
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
});
