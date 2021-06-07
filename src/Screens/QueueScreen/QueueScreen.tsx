import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {FlatList, RectButton, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNTrackPlayer from 'react-native-track-player';
import {itemSeparatorComponent, KeyExtractor} from '../../components/FlatList';
import {theme} from '../../constants/theme';
import QueueRow from './QueueRow';

interface QueueScreenProps {}

const QueueScreen = ({}: QueueScreenProps) => {
  const navigation = useNavigation();
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box px="md" dir="row" align="center" justify="between" mb="lg">
        <Box flex={1}>
          <RectButton onPress={navigation.goBack} activeOpacity={0}>
            <Text>Done</Text>
          </RectButton>
        </Box>
        <Box flex={1} center>
          <Text bold>Up Next</Text>
        </Box>
        <Box flex={1} />
      </Box>
      {queue ? (
        <Box w={'100%'} paddingHorizontal="md">
          <FlatList
            data={queue}
            renderItem={QueueRow}
            keyExtractor={item => item.id.toString()}
          />
        </Box>
      ) : (
        <Text>No podcasts on queue</Text>
      )}
    </SafeAreaView>
  );
};

export default QueueScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
});
