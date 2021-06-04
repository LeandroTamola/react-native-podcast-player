import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';
import {removeHtmlTags, getDay, getDuration} from '../../utils';

interface RowEpisodeProps {
  item: FeedQuery_feed;
  podcastData: SearchQuery_search;
}

const RowEpisode = ({item, podcastData}: RowEpisodeProps) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate('EpisodeDetails', {episode: item, podcast: podcastData})
      }>
      <Box p="xs">
        <Text size="xs" color="grey" bold>
          {getDay(item.pubDate).toUpperCase()}
        </Text>
        <Text bold numberOfLines={2}>
          {item.title}
        </Text>
        <Text size="sm" color="greyDarkest" numberOfLines={2} mb="xs">
          {removeHtmlTags(item.description)}
        </Text>
        <Text size="xs" color="greyDark">
          {getDuration(item.duration)}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default RowEpisode;
