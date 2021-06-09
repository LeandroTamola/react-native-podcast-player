import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Box, Text} from 'react-native-design-utility';

import NavigationHeader from '../../components/NavigationHeader';
import PodcastImage from '../../components/PodcastImage';
import DBContext from '../../context/DBContext';
import {PodcastModel} from '../../models/PodcastModel';
import {SearchQuery_search} from '../../types/graphql';
import LikeAnimation from '../../components/LikeAnimation';

interface HeaderProps {
  podcastData: SearchQuery_search;
  onPressLeft: () => void;
}

const Header = ({podcastData, onPressLeft}: HeaderProps) => {
  const dbContext = useContext(DBContext);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const animation = useRef(null);
  const isFirstRun = useRef(true);

  const handleIsSubscribed = useCallback(
    (feedUrl: string) => {
      const index = dbContext.podcasts.findIndex(
        item => item.feedUrl === feedUrl,
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
      setIsSubscribed(true);
    } else {
      dbContext.unsubToPodcast(podcastData.feedUrl);
      setIsSubscribed(false);
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
        onPressLeft={onPressLeft}
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
          <LikeAnimation
            onPress={() => handleSubscribe(podcastData.feedUrl)}
            {...{isFirstRun, animation, isSubscribed}}
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
