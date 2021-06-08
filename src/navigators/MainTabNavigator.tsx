import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import LibraryScreen from '../Screens/LibraryScreen';
import SearchStackNavigator from './SearchStackNavigator';
import {theme} from '../constants/theme';
import MiniPlayer from '../components/MiniPlayer';
import {QueueScreen} from '../Screens/QueueScreen';

const MainTab = createBottomTabNavigator();

const ICON_SIZE = 20;
const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={tabsProps => (
        <>
          <MiniPlayer />
          <BottomTabBar {...tabsProps} />
        </>
      )}
      tabBarOptions={{activeTintColor: theme.color.blueLight}}>
      <MainTab.Screen
        options={{
          title: 'Search',
          tabBarIcon: props => (
            <FeatherIcon color={props.color} name="search" size={ICON_SIZE} />
          ),
        }}
        name="SearchScreen"
        component={SearchStackNavigator}
      />
      <MainTab.Screen
        options={{
          title: 'Library',
          tabBarIcon: props => (
            <FeatherIcon color={props.color} name="inbox" size={ICON_SIZE} />
          ),
        }}
        name="LibraryScreen"
        component={LibraryScreen}
      />
      <MainTab.Screen
        options={{
          title: 'Queue',
          tabBarIcon: props => (
            <FeatherIcon
              color={props.color}
              name="headphones"
              size={ICON_SIZE}
            />
          ),
        }}
        name="Queue"
        component={QueueScreen}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
