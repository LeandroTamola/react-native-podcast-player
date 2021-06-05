import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import PodcastImage from '../../components/PodcastImage';
import {SearchQuery_search} from '../../types/graphql';

interface HeaderProps {
  podcastData: SearchQuery_search;
}

const Header = ({podcastData}: HeaderProps) => {
  return (
    <Box dir="row" alignItems="center" pb="md">
      <PodcastImage image={podcastData.thumbnail} />
      <Box f={1}>
        <Text numberOfLines={1} size="md" bold>
          {podcastData.podcastName}
        </Text>
        <Text size="xs" mb="xs">
          {podcastData.artist}
        </Text>
        <Text size="xs" color="blueLight">
          {podcastData.genres}
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
