import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RNTrackPlayer from 'react-native-track-player';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Thumbnail from '../../components/Thumbnail';

interface QueueRowProps {
  item: RNTrackPlayer.Track;
  removeFromQueue: () => void;
}

const QueueRow = ({item, removeFromQueue}: QueueRowProps) => {
  return (
    <Box h={90} width="100%" dir="row" alignItems="center">
      <Thumbnail thumbnail={item.artwork} style={styles.image} />
      <Box f={1} ml="xs">
        <Text bold numberOfLines={2}>
          {item.title}
        </Text>
        <Text color="gray" numberOfLines={1}>
          {item.artist}
        </Text>
      </Box>
      <TouchableOpacity onPress={removeFromQueue}>
        <FeatherIcon name="trash" size={20} color="black" />
      </TouchableOpacity>
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
