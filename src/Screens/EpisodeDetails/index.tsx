import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from 'react-native-design-utility';
import {ScrollView} from 'react-native-gesture-handler';

import HTMLReader from '../../components/HTMLReader';
import {SearchStackRouteParamsList} from '../../navigators/types';
import Header from './Header';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'EpisodeDetails'>;

const EpisodeDetailsScreen = () => {
  const {episode, podcast} = useRoute<NavigationParams>().params ?? {};

  return (
    <ScrollView style={styles.scrollContainer}>
      <Box flex={1}>
        <Header {...{episode, podcast}} />
        <Box paddingHorizontal="sm" paddingVertical="md" bg="white">
          <HTMLReader text={episode.description} />
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
