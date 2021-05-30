import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {RectButton} from 'react-native-gesture-handler';
import {PodcastType} from '../types/types';
import PodcastImage from './PodcastImage';

export interface RowItemProps {
  item: PodcastType;
}

const RowItem = ({item}: RowItemProps) => {
  const navigation = useNavigation();
  return (
    <RectButton
      onPress={() => navigation.navigate('PodcastDetails', {data: item})}>
      <Box h={90} dir="row" alignItems="center" px="sm">
        <Box
          h={70}
          w={70}
          bg="blueLight"
          radius={10}
          mr={10}
          style={styles.imgContainer}>
          {item.thumbnail && <PodcastImage image={item.thumbnail} />}
        </Box>
        <Box f={1}>
          <Text numberOfLines={1} bold>
            {item.podcastName}
          </Text>
          <Text size="xs">{item.artist}</Text>
          <Text size="xs" color="blueLight">
            {item.episodesCount}
          </Text>
        </Box>
      </Box>
    </RectButton>
  );
};

export default RowItem;

const styles = StyleSheet.create({
  imgContainer: {
    overflow: 'hidden',
  },
});
