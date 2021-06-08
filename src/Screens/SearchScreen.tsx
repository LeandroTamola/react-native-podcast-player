import React, {useCallback, useState} from 'react';
import {StyleSheet, TextInput, FlatList} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Box} from 'react-native-design-utility';
import {useLazyQuery} from '@apollo/react-hooks';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {theme} from '../constants/theme';
import RowItem from '../components/RowItem';
import searchQuery from '../graphql/query/searchQuery';
import {SearchQuery, SearchQueryVariables} from '../types/graphql';
import MessageScreen from '../components/MessageScreen';
import LoadingScreen from '../components/LoadingScreen';
import {RectButton} from 'react-native-gesture-handler';

let hasNotch = DeviceInfo.hasNotch();
const searchMessage = 'Please search something';
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

  const KeyExtractor = useCallback((_, index) => String(index), []);

  return (
    <Box f={1} bg="white" paddingTop={hasNotch ? 40 : 0}>
      <Box h={50} w="100%" my="sm" px="sm">
        <Box
          dir="row"
          alignItems="center"
          bg="greyLighter"
          pl={10}
          borderRadius="sm">
          <RectButton onPress={onSearch} activeOpacity={0}>
            <FeatherIcon name="search" size={20} color={theme.color.greyDark} />
          </RectButton>
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
      </Box>
      {error && <MessageScreen text={error.message} />}
      {loading && <LoadingScreen />}
      {!loading && !data && <MessageScreen text={searchMessage} />}
      {data && (
        <FlatList
          keyboardShouldPersistTaps="never"
          contentContainerStyle={styles.listContentContainer}
          data={data?.search ?? []}
          renderItem={item => <RowItem item={item.item} />}
          keyExtractor={KeyExtractor}
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
