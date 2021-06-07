import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import RNTrackPlayer from 'react-native-track-player';
import Thumbnail from '../../components/Thumbnail';

interface QueueRowProps {
  item: RNTrackPlayer.Track;
}

const QueueRow = ({item}: QueueRowProps) => {
  return (
    <Box h={90} dir="row" alignItems="center">
      <Thumbnail thumbnail={item.artwork} style={styles.image} />
      <Box ml="md">
        <Text bold numberOfLines={2}>
          {item.title}
        </Text>
        <Text color="gray" numberOfLines={1}>
          {item.artist}
        </Text>
      </Box>
    </Box>
  );
};

export default QueueRow;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
});
