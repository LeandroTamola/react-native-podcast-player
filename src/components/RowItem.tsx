import {useNavigation} from '@react-navigation/core';
import React, {memo, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DBContext from '../context/DBContext';
import {PodcastType} from '../types/types';
import Thumbnail from './Thumbnail';

export interface RowItemProps {
  item: PodcastType;
  isRemovable?: boolean;
}

const RowItem = memo(({item, isRemovable}: RowItemProps) => {
  const navigation = useNavigation();
  const dbContext = useContext(DBContext);
  return (
    <RectButton
      onPress={() => navigation.navigate('PodcastDetails', {data: item})}>
      <Box h={90} dir="row" alignItems="center" px="sm">
        <Box
          h={70}
          w={70}
          bg="greyDark"
          radius={10}
          mr={10}
          style={styles.imgContainer}>
          <Thumbnail thumbnail={item.thumbnail} style={styles.image} />
        </Box>
        <Box f={1}>
          <Text numberOfLines={1} bold>
            {item.podcastName}
          </Text>
          <Text size="xs" numberOfLines={2}>
            {item.artist}
          </Text>
          <Text size="xs" color="blueLight">
            {item.episodesCount}
          </Text>
        </Box>
        <Box>
          {isRemovable && (
            <TouchableOpacity
              onPress={() => dbContext.unsubToPodcast(item.feedUrl)}>
              <FeatherIcon name="trash" size={20} />
            </TouchableOpacity>
          )}
        </Box>
      </Box>
    </RectButton>
  );
});

export default RowItem;

const styles = StyleSheet.create({
  imgContainer: {
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
