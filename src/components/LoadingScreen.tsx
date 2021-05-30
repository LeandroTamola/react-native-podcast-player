import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Box, Text} from 'react-native-design-utility';

const LoadingScreen = () => {
  return (
    <Box flex={1} center h={400}>
      <ActivityIndicator size="small" />
      <Text size="xs" color="grey">
        Loading
      </Text>
    </Box>
  );
};

export default LoadingScreen;
