import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from '../Screens/SearchScreen';
import PodcastDetailsScreen from '../Screens/PodcastDetailsScreen';
import {theme} from '../constants/theme';
import EpisodeDetailsScreen from '../Screens/EpisodeDetails/';

const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      headerMode="screen"
      screenOptions={{headerTintColor: theme.color.blueLight}}>
      <SearchStack.Screen
        options={{headerShown: false, title: 'Search'}}
        name="SearchScreen"
        component={SearchScreen}
      />
      <SearchStack.Screen
        options={{headerShown: false}}
        name="PodcastDetails"
        component={PodcastDetailsScreen}
      />
      <SearchStack.Screen
        options={{headerShown: false, title: 'Episode Details'}}
        name="EpisodeDetails"
        component={EpisodeDetailsScreen}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
