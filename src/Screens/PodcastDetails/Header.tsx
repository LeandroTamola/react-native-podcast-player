import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../../constants/theme';
import {SearchQuery_search} from '../../types/graphql';

interface HeaderProps {
  data: SearchQuery_search;
}

const Header = ({data}: HeaderProps) => {
  return (
    <Box dir="row" alignItems="center" pb="md">
      <Box
        h={100}
        w={100}
        bg="blueLight"
        radius={10}
        mr={10}
        style={styles.imgContainer}>
        {data.thumbnail && (
          <Image source={{uri: data.thumbnail}} style={styles.image} />
        )}
      </Box>
      <Box f={1}>
        <Text numberOfLines={1} size="md" bold>
          {data.podcastName}
        </Text>
        <Text size="xs" mb="xs">
          {data.artist}
        </Text>
        <Text size="xs" color="blueLight">
          {data.genres}
        </Text>
      </Box>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  imgContainer: {
    overflow: 'hidden',
    borderColor: theme.color.blueLight,
    borderWidth: 2,
  },

  image: {
    flex: 1,
  },
});
