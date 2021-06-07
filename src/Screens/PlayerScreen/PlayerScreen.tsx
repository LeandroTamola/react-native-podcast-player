import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {theme} from '../../constants/theme';

import {usePlayerContext} from '../../context/PlayerContext';

interface PlayerScreenProps {}

const {width} = Dimensions.get('window');

const PlayerScreen = ({}: PlayerScreenProps) => {
  const PlayerContext = usePlayerContext();
  const navigation = useNavigation();

  if (!PlayerContext.currentTrack) {
    return null;
  }

  const track = PlayerContext.currentTrack;
  return (
    <SafeAreaView style={styles.safeArea}>
      <Box f={1} width={width} alignItems="center">
        <Box mb="md" style={styles.barIcon}>
          <TouchableOpacity
            onPress={navigation.goBack}
            hitSlop={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}></TouchableOpacity>
        </Box>
        <Box center mb="md">
          <Image
            source={{uri: track.artwork}}
            style={{
              width: PlayerContext.isPaused
                ? width - theme.space.md * 4
                : width - theme.space.md * 2,
              height: PlayerContext.isPaused
                ? width - theme.space.md * 4
                : width - theme.space.md * 2,
            }}
          />
        </Box>
        <Box px="md" center>
          <Text numberOfLines={1} bold size="lg">
            {track.title}
          </Text>
          <Text numberOfLines={1} size="lg">
            {track.artist}
          </Text>
        </Box>
        <Box
          width="100%"
          dir="row"
          paddingHorizontal="lg"
          justifyContent="around"
          alignItems="center">
          <TouchableOpacity onPress={() => PlayerContext.seekTo(-15)}>
            <FeatherIcon name="rotate-ccw" size={50} />
          </TouchableOpacity>
          {PlayerContext.isPaused ? (
            <TouchableOpacity onPress={() => PlayerContext.play()}>
              <FeatherIcon name="play" size={60} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => PlayerContext.pause()}>
              <FeatherIcon name="pause" size={60} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => PlayerContext.seekTo()}>
            <FeatherIcon name="rotate-cw" size={50} />
          </TouchableOpacity>
        </Box>
        <Box></Box>
      </Box>
    </SafeAreaView>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  barIcon: {
    backgroundColor: theme.color.grey,
    borderRadius: 10,
    width: 40,
    height: 4,
  },
  image: {
    borderRadius: 10,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
