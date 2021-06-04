import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useMemo, useState} from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import ImageColors from 'react-native-image-colors';
import DeviceInfo from 'react-native-device-info';
import {Box, Text} from 'react-native-design-utility';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';
import {getDuration} from '../../utils';
import BackgroundColors from '../../components/BackgroundColors';
import {usePlayerContext} from '../../context/PlayerContext';
import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';

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
    <BackgroundColors image={episode.image}>
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
        <Image source={{uri: episode.image!}} style={styles.image} />
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text marginTop="xs" size="sm">
              {`${podcast.podcastName} >`}
            </Text>
          </TouchableOpacity>
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
    </BackgroundColors>
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
    borderRadius: 10,
  },
});
