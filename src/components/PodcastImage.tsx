import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Box} from 'react-native-design-utility';

interface PodcastImageProps {
  image?: string;
}

const PodcastImage = ({image}: PodcastImageProps) => {
  return (
    <Box
      h={100}
      w={100}
      bg="blueLight"
      radius={10}
      mr={10}
      style={styles.imgContainer}>
      {image && <Image source={{uri: image}} style={styles.image} />}
    </Box>
  );
};

export default PodcastImage;

const styles = StyleSheet.create({
  imgContainer: {
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});
