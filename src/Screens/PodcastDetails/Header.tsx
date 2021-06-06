import React, {useContext} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PodcastImage from '../../components/PodcastImage';
import DBContext from '../../context/DBContext';
import {PodcastModel} from '../../models/PodcastModel';
import {SearchQuery_search} from '../../types/graphql';

interface HeaderProps {
  podcastData: SearchQuery_search;
}

const Header = ({podcastData}: HeaderProps) => {
  const dbContext = useContext(DBContext);
  const handleSubscribe = () => {
    dbContext.subToPodcast(
      new PodcastModel({
        episodesCount: podcastData.episodesCount,
        thumbnail: podcastData.thumbnail,
        name: podcastData.podcastName,
        artist: podcastData.artist,
        feedUrl: podcastData.feedUrl,
      }),
    );
  };
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

        <TouchableOpacity onPress={handleSubscribe}>
          <Text size="xs" color="blueLight">
            subscribe
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default Header;
