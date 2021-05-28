import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';

interface HomeScreenProps {}

const ListenNowScreen = ({}: HomeScreenProps) => {
  return (
    <Box f={1} center>
      <Text>Listen Now</Text>
    </Box>
  );
};

export default ListenNowScreen;

const styles = StyleSheet.create({});
