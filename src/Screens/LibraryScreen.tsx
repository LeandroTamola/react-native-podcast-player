import React, {useContext} from 'react';
import {Box, Text} from 'react-native-design-utility';

import MessageScreen from '../components/MessageScreen';
import DBContext from '../context/DBContext';

const LibraryScreen = () => {
  const dbContext = useContext(DBContext);

  if (!dbContext.podcasts.length) {
    return <MessageScreen text="Library empty" />;
  }
  return (
    <Box f={1} bg="white">
      {dbContext.podcasts.map(podcast => (
        <Box key={podcast.feedUrl} bg="white" mb="md" p="sm">
          <Text>{podcast.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default LibraryScreen;
