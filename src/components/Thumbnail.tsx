import React from 'react';
import {Image, StyleProp, StyleSheet} from 'react-native';

const thumbnailImg = require('../assets/thumbnail.jpg');

interface ThumbnailProps {
  thumbnail?: string;
  style?: StyleProp<StyleMedia>;
}

const Thumbnail = ({thumbnail, style}: ThumbnailProps) => {
  return !thumbnail ? (
    <Image source={thumbnailImg} style={styles.image} />
  ) : (
    <Image source={{uri: thumbnail}} style={[styles.image, style]} />
  );
};

export default Thumbnail;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
