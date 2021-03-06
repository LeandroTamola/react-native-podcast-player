import React, {useContext} from 'react';
import {Box} from 'react-native-design-utility';
import {FlatList} from 'react-native-gesture-handler';
import {KeyExtractor} from '../components/FlatList';

import MessageScreen from '../components/MessageScreen';
import RowItem from '../components/RowItem';
import {hasNotch} from '../constants/metrics';
import DBContext from '../context/DBContext';

const LibraryScreen = () => {
  const dbContext = useContext(DBContext);

  if (!dbContext.podcasts.length) {
    return (
      <MessageScreen
        title="No Shows Yet?"
        body="Use the Search tab to discover powerful new stories, or search for your favourite show to start listening now. Don't forget to follow shows you like!"
      />
    );
  }
  return (
    <Box f={1} bg="white" style={{paddingTop: hasNotch()}}>
      <FlatList
        data={dbContext.podcasts ?? []}
        renderItem={item => <RowItem item={item.item} isRemovable />}
        keyExtractor={KeyExtractor}
      />
    </Box>
  );
};

export default LibraryScreen;
