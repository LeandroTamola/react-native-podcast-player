import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Box, Text} from 'react-native-design-utility';

import {SearchStackRouteParamsList} from '../navigators/types';
import Header from './PodcastDetails/Header';
import RowEpisode from './PodcastDetails/RowEpisode';
import {theme} from '../constants/theme';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;
const DATA = [{id: '1'}, {id: '2'}];

const PodcastDetailsScreen = () => {
  const {data} = useRoute<NavigationParams>().params ?? {};
  return (
    <Box f={1} padding="xs" bg="white" backgroundColor="white">
      <Header {...{data}} />
      <Box dir="row" alignItems="center" p="xs" borderRadius="xs">
        <FeatherIcon
          name="play"
          color={theme.color.blueLight}
          size={20}
          style={styles.playIcon}
        />
        <Box>
          <Text bold>Play</Text>
          <Text size="sm">#400 - The Last Episode</Text>
        </Box>
      </Box>
      <FlatList
        data={DATA}
        ListHeaderComponent={
          <Text marginVertical="md" size="lg" bold>
            Episodes
          </Text>
        }
        renderItem={RowEpisode}
        ItemSeparatorComponent={() => <Box w="100%" h={1} bg="greyLighter" />}
      />
    </Box>
  );
};

export default PodcastDetailsScreen;

const styles = StyleSheet.create({
  playIcon: {
    marginRight: 15,
  },
});
