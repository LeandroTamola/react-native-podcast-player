import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import DBContext from '../context/DBContext';

interface LibraryScreenProps {}

const LibraryScreen = ({}: LibraryScreenProps) => {
  const dbContext = useContext(DBContext);
  return (
    <Box f={1}>
      {dbContext.podcasts.map(podcast => (
        <Box key={podcast.feedUrl} bg="white" mb="md" p="sm">
          <Text>{podcast.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({});
