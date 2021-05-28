import React, {useState} from 'react';
import {StyleSheet, TextInput, FlatList} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Box} from 'react-native-design-utility';
import {useLazyQuery} from '@apollo/react-hooks';

import {theme} from '../constants/theme';
import RowItem from '../components/RowItem';
import searchQuery from '../graphql/query/searchQuery';
import {SearchQuery, SearchQueryVariables} from '../types/graphql';
import MessageScreen from '../components/MessageScreen';
import LoadingScreen from '../components/LoadingScreen';

let hasNotch = DeviceInfo.hasNotch();
const searchMessage = 'No Podcasts, please search something';
const SearchScreen = ({}) => {
  const [term, setTerm] = useState<string>('');
  const [search, {data, loading, error}] =
    useLazyQuery<SearchQuery, SearchQueryVariables>(searchQuery);

  const onSearch = async () => {
    try {
      await search({variables: {term}});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Box f={1} bg="white" paddingTop={hasNotch ? 40 : 0}>
      <Box h={50} w="100%" my="sm" px="sm">
        <TextInput
          style={styles.input}
          placeholder="Search Podcast"
          selectionColor={theme.color.blueLight}
          onChangeText={setTerm}
          autoCorrect={false}
          onSubmitEditing={onSearch}
          value={term}
        />
      </Box>
      {error ? (
        <MessageScreen text={error.message} />
      ) : (
        <FlatList
          keyboardShouldPersistTaps="never"
          contentContainerStyle={styles.listContentContainer}
          data={data?.search ?? []}
          renderItem={item => <RowItem item={item.item} />}
          keyExtractor={(_, index) => String(index)}
          ListEmptyComponent={
            <>{!loading && <MessageScreen text={searchMessage} />}</>
          }
          ListHeaderComponent={<>{loading && <LoadingScreen />}</>}
        />
      )}
    </Box>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    backgroundColor: theme.color.greyLighter,
    borderRadius: 10,
    paddingHorizontal: theme.space.sm,
    fontSize: theme.text.size.md,
  },
  listContentContainer: {
    minHeight: '100%',
  },
});
