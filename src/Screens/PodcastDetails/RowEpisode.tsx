import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {usePlayerContext} from '../../context/PlayerContext';

import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';
import {removeHtmlTags, getDay, getDuration} from '../../utils';

interface RowEpisodeProps {
  item: FeedQuery_feed;
  podcastData: SearchQuery_search;
}

const RowEpisode = ({item, podcastData}: RowEpisodeProps) => {
  const {navigate} = useNavigation();
  const playerContext = usePlayerContext();
  return (
    <RectButton
      activeOpacity={0}
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
          {item.summary
            ? removeHtmlTags(item.summary)
            : removeHtmlTags(item.description)}
        </Text>
        {item.linkUrl && (
          <TouchableOpacity
            onPress={() => {
              playerContext.play({
                title: item.title,
                artwork: item.image ?? podcastData.thumbnail,
                id: item.linkUrl,
                url: item.linkUrl,
                artist: podcastData.artist,
              });
            }}>
            <Box dir="row" alignItems="center">
              <Box
                backgroundColor="purple"
                marginRight="xs"
                padding={3}
                borderRadius={10}>
                <FeatherIcon name="play" size={15} color="white" />
              </Box>
              <Text size="xs" color="purple">
                {getDuration(item.duration)}
              </Text>
            </Box>
          </TouchableOpacity>
        )}
      </Box>
    </RectButton>
  );
};

export default RowEpisode;
