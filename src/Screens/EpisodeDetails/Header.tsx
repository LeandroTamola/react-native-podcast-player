import {useNavigation} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Box, Text} from 'react-native-design-utility';
import {RectButton} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import {getDuration} from '../../utils';
import {usePlayerContext} from '../../context/PlayerContext';
import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';
import {theme} from '../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';
import Thumbnail from '../../components/Thumbnail';

interface HeaderProps {
  episode: FeedQuery_feed;
  podcast: SearchQuery_search;
}

const Header = ({episode, podcast}: HeaderProps) => {
  let hasNotch = DeviceInfo.hasNotch();
  const navigation = useNavigation();
  const duration = useMemo(() => getDuration(episode.duration), [episode]);
  const playerContext = usePlayerContext();

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.5}}
      colors={['white', theme.color.greyLightest]}
      style={styles.linearGradient}>
      <Box
        style={[styles.headerContainer, {paddingTop: hasNotch ? 50 : 10}]}
        paddingBottom="md">
        <Box
          width="100%"
          dir="row"
          alignItems="center"
          justifyContent="between"
          paddingHorizontal="sm">
          <RectButton onPress={() => navigation.goBack()} activeOpacity={0}>
            <FeatherIcon name="arrow-left" size={25} style={styles.icon} />
          </RectButton>
          <RectButton onPress={() => true} activeOpacity={0}>
            <FeatherIcon name="arrow-down" size={25} style={styles.icon} />
          </RectButton>
        </Box>
        <Thumbnail thumbnail={podcast.thumbnail} style={styles.image} />
        <Box
          alignItems="center"
          justifyContent="between"
          paddingHorizontal="md">
          <Text marginTop="xs" color="greyDark" size="sm">
            {duration}
          </Text>
          <Text bold marginTop="xs">
            {episode.title}
          </Text>
        </Box>
        <Button
          style={{marginTop: 10, width: '75%'}}
          label="Play"
          icon="play"
          onPress={() => {
            if (!episode) return;
            playerContext.play({
              title: episode.title,
              artwork: episode.image ?? podcast.thumbnail,
              id: episode.linkUrl,
              url: episode.linkUrl,
              artist: podcast.artist,
            });
          }}
        />
      </Box>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  image: {
    height: 150,
    width: 150,
  },
  linearGradient: {
    flex: 1,
  },
});
