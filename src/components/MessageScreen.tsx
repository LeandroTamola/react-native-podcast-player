import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';

interface MessageScreenProps {
  text: string;
}

const MessageScreen = ({text}: MessageScreenProps) => {
  return (
    <Box flex={1} center>
      <Text color="grey">{text}</Text>
    </Box>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
