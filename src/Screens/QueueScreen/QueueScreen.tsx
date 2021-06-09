import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {Box} from 'react-native-design-utility';
import {FlatList} from 'react-native-gesture-handler';
import RNTrackPlayer from 'react-native-track-player';

import MessageScreen from '../../components/MessageScreen';
import NavigationHeader from '../../components/NavigationHeader';
import QueueRow from './QueueRow';

interface QueueScreenProps {}

const QueueScreen = ({}: QueueScreenProps) => {
  const [queue, setQueue] = useState<RNTrackPlayer.Track[]>([]);

  const getQueue = async () => {
    const tracks = await RNTrackPlayer.getQueue();
    setQueue(tracks);
  };

  useFocusEffect(
    useCallback(() => {
      getQueue();
    }, []),
  );

  if (!queue.length) {
    return (
      <MessageScreen
        title="Nothing On Queue"
        body="Search and start queueing your favourites shows!"
      />
    );
  }

  return (
    <Box f={1} padding="xs" bg="white">
      <NavigationHeader title="Up Next" />
      <Box f={1} marginHorizontal="sm">
        <FlatList
          data={queue}
          renderItem={QueueRow}
          keyExtractor={item => item.id.toString()}
        />
      </Box>
    </Box>
  );
};

export default QueueScreen;
