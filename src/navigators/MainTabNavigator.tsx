import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import LibraryScreen from '../Screens/LibraryScreen';
import ListenNowScreen from '../Screens/ListenNowScreen';
import SearchStackNavigator from './SearchStackNavigator';
import {theme} from '../constants/theme';
import MiniPlayer from '../components/MiniPlayer';

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
          title: 'Listen Now',
          tabBarIcon: props => (
            <FeatherIcon
              color={props.color}
              name="headphones"
              size={ICON_SIZE}
            />
          ),
        }}
        name="ListenNow"
        component={ListenNowScreen}
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
          title: 'Search',
          tabBarIcon: props => (
            <FeatherIcon color={props.color} name="search" size={ICON_SIZE} />
          ),
        }}
        name="SearchScreen"
        component={SearchStackNavigator}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
