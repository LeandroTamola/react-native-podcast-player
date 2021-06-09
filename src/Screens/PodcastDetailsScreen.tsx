import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {usePlayerContext} from '../context/PlayerContext';
import MessageScreen from '../components/MessageScreen';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

const PodcastDetailsScreen = () => {
  const playerContext = usePlayerContext();
  const navigation = useNavigation();
  const {data: podcastData} = useRoute<NavigationParams>().params ?? {};
  const {data, loading} = useQuery<FeedQuery, FeedQueryVariables>(feedQuery, {
    variables: {feedUrl: podcastData.feedUrl},
  });

  const handleRenderItem = useCallback(
    ({item}) => <RowEpisode item={item} {...{podcastData}} />,
    [podcastData],
  );

  const KeyExtractor = useCallback((_, index) => String(index), []);

  const ItemSeparatorComponent = useCallback(
    () => <Box w="100%" h={1} bg="greyLighter" />,
    [],
  );
  const element = data?.feed[0];

  return (
    <Box f={1} padding="xs" bg="white" backgroundColor="white">
      <Header {...{podcastData}} onPressLeft={navigation.goBack} />
      <Box
        dir="row"
        alignItems="center"
        p="xs"
        pb="sm"
        borderRadius="xs"
        style={styles.container}>
        {element && (
          <>
            <TouchableOpacity
              onPress={() => {
                playerContext.play({
                  title: element.title,
                  artwork: element.image ?? podcastData.thumbnail,
                  id: element.linkUrl,
                  url: element.linkUrl,
                  artist: podcastData.artist,
                });
              }}>
              <FeatherIcon
                name="play"
                color={theme.color.blueLight}
                size={20}
                style={styles.playIcon}
              />
            </TouchableOpacity>
            <Box paddingRight="xl">
              <Text bold>Play</Text>
              <Text size="sm" numberOfLines={2}>
                {element.title}
              </Text>
            </Box>
          </>
        )}
      </Box>

      {loading && <LoadingScreen />}

      {!data && !loading && (
        <MessageScreen
          title="Oops, something went wrong"
          body="There is no available podcast for this show"
        />
      )}
      {data && (
        <FlatList
          data={data?.feed}
          ListHeaderComponent={
            <Text marginVertical="md" size="lg" bold>
              Episodes
            </Text>
          }
          renderItem={handleRenderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyExtractor={KeyExtractor}
        />
      )}
    </Box>
  );
};

export default PodcastDetailsScreen;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  playIcon: {
    marginRight: 15,
  },
});
