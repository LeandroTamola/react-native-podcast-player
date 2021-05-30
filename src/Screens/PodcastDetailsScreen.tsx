import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Box, Text} from 'react-native-design-utility';

import {SearchStackRouteParamsList} from '../navigators/types';
import Header from './PodcastDetails/Header';
import RowEpisode from './PodcastDetails/RowEpisode';
import {theme} from '../constants/theme';
import {useQuery} from '@apollo/client';
import {FeedQuery, FeedQueryVariables} from '../types/graphql';
import feedQuery from '../graphql/query/feedQuery';
import LoadingScreen from '../components/LoadingScreen';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

const PodcastDetailsScreen = () => {
  const {data: podcastData} = useRoute<NavigationParams>().params ?? {};
  const {data, loading} = useQuery<FeedQuery, FeedQueryVariables>(feedQuery, {
    variables: {feedUrl: podcastData.feedUrl},
  });
  return (
    <Box f={1} padding="xs" bg="white" backgroundColor="white">
      <Header {...{podcastData}} />
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
        data={data?.feed}
        ListHeaderComponent={
          <Text marginVertical="md" size="lg" bold>
            Episodes
          </Text>
        }
        renderItem={item => <RowEpisode item={item.item} />}
        ItemSeparatorComponent={() => <Box w="100%" h={1} bg="greyLighter" />}
        keyExtractor={(_, index) => index.toString()}
      />
      {loading && <LoadingScreen />}
    </Box>
  );
};

export default PodcastDetailsScreen;

const styles = StyleSheet.create({
  playIcon: {
    marginRight: 15,
  },
});
