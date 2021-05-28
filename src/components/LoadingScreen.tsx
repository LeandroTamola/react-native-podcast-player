import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from 'react-native-design-utility';

const LoadingScreen = () => {
  return (
    <Box flex={1} center h={400}>
      <ActivityIndicator size="large" />
    </Box>
  );
};

export default LoadingScreen;
