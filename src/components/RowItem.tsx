import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';

interface Podcast {
  __typename: string;
  artist: string;
  episodesCount: number;
  feedUrl: string;
  genres: string[];
  podcastName: string;
  thumbnail: string;
}
interface RowItemProps {
  item: Podcast;
}

const RowItem = ({item}: RowItemProps) => {
  return (
    <Box h={90} dir="row" alignItems="center" px="sm">
      <Box
        h={70}
        w={70}
        bg="blueLight"
        radius={10}
        mr={10}
        style={styles.imgContainer}>
        {item.thumbnail && (
          <Image source={{uri: item.thumbnail}} style={styles.image} />
        )}
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
  );
};

export default RowItem;

const styles = StyleSheet.create({
  imgContainer: {
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});
