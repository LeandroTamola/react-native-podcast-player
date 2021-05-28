import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LibraryScreen from '../Screens/LibraryScreen';
import ListenNowScreen from '../Screens/ListenNowScreen';
import SearchScreen from '../Screens/SearchScreen';

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        options={{title: 'Listen Now'}}
        name="ListenNow"
        component={ListenNowScreen}
      />
      <MainTab.Screen
        options={{title: 'Library'}}
        name="LibraryScreen"
        component={LibraryScreen}
      />
      <MainTab.Screen
        options={{title: 'Search'}}
        name="SearchScreen"
        component={SearchScreen}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
