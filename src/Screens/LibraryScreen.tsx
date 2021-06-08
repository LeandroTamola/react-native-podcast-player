import React, {useContext} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {FlatList} from 'react-native-gesture-handler';
import {KeyExtractor} from '../components/FlatList';

import MessageScreen from '../components/MessageScreen';
import RowItem from '../components/RowItem';
import {hasNotch} from '../constants/metrics';
import DBContext from '../context/DBContext';

const LibraryScreen = () => {
  const dbContext = useContext(DBContext);

  if (!dbContext.podcasts.length) {
    return <MessageScreen text="Library empty" />;
  }
  return (
    <Box f={1} bg="white" style={{paddingTop: hasNotch()}}>
      <FlatList
        data={dbContext.podcasts ?? []}
        renderItem={item => <RowItem item={item.item} />}
        keyExtractor={KeyExtractor}
      />
    </Box>
  );
};

export default LibraryScreen;
