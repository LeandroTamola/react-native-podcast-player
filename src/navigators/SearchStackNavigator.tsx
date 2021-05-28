import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from '../Screens/SearchScreen';
import PodcastDetailsScreen from '../Screens/PodcastDetailsScreen';
import {theme} from '../constants/theme';

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
        options={{title: ''}}
        name="PodcastDetails"
        component={PodcastDetailsScreen}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;