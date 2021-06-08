import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Box, Text} from 'react-native-design-utility';

import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationHeader from '../../components/NavigationHeader';
import PodcastImage from '../../components/PodcastImage';
import {hasNotch} from '../../constants/metrics';
import DBContext from '../../context/DBContext';
import {PodcastModel} from '../../models/PodcastModel';
import {SearchQuery_search} from '../../types/graphql';

interface HeaderProps {
  podcastData: SearchQuery_search;
}

const Header = ({podcastData}: HeaderProps) => {
  const dbContext = useContext(DBContext);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const {goBack} = useNavigation();

  const handleIsSubscribed = useCallback(
    (feedUrl: string) => {
      const index = dbContext.podcasts.findIndex(
        item => item.feedUrl == feedUrl,
      );
      if (index !== -1) {
        return true;
      } else {
        return false;
      }
    },
    [dbContext.podcasts],
  );

  const handleSubscribe = (feedUrl: string) => {
    if (!handleIsSubscribed(feedUrl)) {
      dbContext.subToPodcast(
        new PodcastModel({
          episodesCount: podcastData.episodesCount,
          thumbnail: podcastData.thumbnail,
          name: podcastData.podcastName,
          artist: podcastData.artist,
          feedUrl: podcastData.feedUrl,
        }),
      );
    }
  };

  useEffect(() => {
    setIsSubscribed(handleIsSubscribed(podcastData.feedUrl));
  }, [dbContext]);
  return (
    <>
      <NavigationHeader
        left="Back"
        iconLeft="arrow-left"
        onPressLeft={goBack}
      />
      <Box dir="row" alignItems="center" pb="md">
        <PodcastImage image={podcastData.thumbnail} />
        <Box f={1}>
          <Text numberOfLines={1} size="md" bold>
            {podcastData.podcastName}
          </Text>
          <Text size="xs" mb="xs">
            {podcastData.artist}
          </Text>

          <TouchableOpacity
            onPress={() => handleSubscribe(podcastData.feedUrl)}>
            <Text size="xs" color="blueLight">
              {isSubscribed ? 'Subscribed' : 'Not Subscribed'}
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </>
  );
};

export default Header;
