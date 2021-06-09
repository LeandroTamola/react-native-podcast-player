import React from 'react';
import {Image, StyleProp, StyleSheet} from 'react-native';
import {Box} from 'react-native-design-utility';

const thumbnailImg = require('../assets/thumbnail.jpg');

interface ThumbnailProps {
  thumbnail?: string;
  style?: StyleProp<StyleMedia>;
}

const Thumbnail = ({thumbnail, style}: ThumbnailProps) => {
  return (
    <Box bg="blueLight" style={[styles.container, style]}>
      {!thumbnail ? (
        <Image source={thumbnailImg} style={styles.image} />
      ) : (
        <Image source={{uri: thumbnail}} style={styles.image} />
      )}
    </Box>
  );
};

export default Thumbnail;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    flex: 1,
  },
});
