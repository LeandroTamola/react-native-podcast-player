import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ProgressSlider from '../../components/PlayerSlider';
import {makeHitSlop} from '../../constants/metrics';
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
      <Box f={1} width={width} alignItems="center" justifyContent="around">
        <Box
          width="100%"
          dir="row"
          px="md"
          alignItems="center"
          justifyContent="between">
          <TouchableOpacity
            onPress={navigation.goBack}
            hitSlop={makeHitSlop(20)}>
            <FeatherIcon name="chevron-down" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Queue')}
            hitSlop={makeHitSlop(20)}>
            <FeatherIcon name="list" size={30} />
          </TouchableOpacity>
        </Box>
        <Box center mb="md">
          <Image source={{uri: track.artwork}} style={styles.image} />
        </Box>
        <Box px="md" center>
          <Text numberOfLines={1} bold size="lg">
            {track.title}
          </Text>
          <Text numberOfLines={1} size="lg" color="purple">
            {track.artist}
          </Text>
        </Box>
        <Box width="90%">
          <ProgressSlider />
        </Box>
        <Box
          width="100%"
          dir="row"
          paddingHorizontal="lg"
          justifyContent="around"
          alignItems="center">
          <TouchableOpacity onPress={() => PlayerContext.seekTo(-15)}>
            <FeatherIcon name="rotate-ccw" size={40} />
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
            <FeatherIcon name="rotate-cw" size={40} />
          </TouchableOpacity>
        </Box>
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
    width: width - theme.space.md * 2,
    height: width - theme.space.md * 2,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
