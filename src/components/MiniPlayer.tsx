import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {usePlayerContext} from '../context/PlayerContext';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../constants/theme';
import {useNavigation} from '@react-navigation/core';

interface MiniPlayerProps {}

const MiniPlayer = ({}: MiniPlayerProps) => {
  const PlayerContext = usePlayerContext();
  const navigation = useNavigation();

  if (PlayerContext.isEmpty || !PlayerContext.currentTrack) {
    return null;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Player')}>
      <Box
        h={75}
        flexDirection="row"
        backgroundColor="white"
        justifyContent="between"
        alignItems="center"
        paddingHorizontal="sm"
        style={styles.container}>
        <Box f={1} flexDirection="row" alignItems="center">
          <Box
            h={50}
            w={50}
            bg="blueLight"
            radius={10}
            mr={10}
            style={styles.imageContainer}>
            <Image
              source={{uri: PlayerContext.currentTrack.artwork}}
              style={{flex: 1}}
            />
          </Box>
          <Box flex={1} marginRight="xs">
            <Text numberOfLines={1}>{PlayerContext.currentTrack.title}</Text>
          </Box>
        </Box>
        <Box mr="xs">
          {PlayerContext.isPaused ? (
            <TouchableOpacity onPress={() => PlayerContext.play()}>
              <FeatherIcon name="play" size={30} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={PlayerContext.pause}>
              <FeatherIcon name="pause" size={30} />
            </TouchableOpacity>
          )}
        </Box>
        <Box>
          <TouchableOpacity onPress={() => PlayerContext.seekTo()}>
            <FeatherIcon name="rotate-cw" size={30} />
          </TouchableOpacity>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: theme.color.greyLightest,
  },
  imageContainer: {
    overflow: 'hidden',
  },
});
