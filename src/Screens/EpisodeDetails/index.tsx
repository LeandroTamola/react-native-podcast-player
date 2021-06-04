import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {ScrollView} from 'react-native-gesture-handler';

import {SearchStackRouteParamsList} from '../../navigators/types';
import {removeHtmlTags} from '../../utils';
import Header from './Header';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'EpisodeDetails'>;

const EpisodeDetailsScreen = () => {
  const {episode, podcast} = useRoute<NavigationParams>().params ?? {};
  const description = useMemo(
    () => removeHtmlTags(episode.description),
    [episode],
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <Box flex={1}>
        <Header {...{episode, podcast}} />
        <Box paddingHorizontal="sm" paddingVertical="md" bg="white">
          <Text>{description}</Text>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default EpisodeDetailsScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
  },
});
