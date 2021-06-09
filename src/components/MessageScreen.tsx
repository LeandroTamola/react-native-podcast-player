import React from 'react';
import {Box, Text} from 'react-native-design-utility';

interface MessageScreenProps {
  title?: string;
  body?: string;
}

const MessageScreen = ({title, body}: MessageScreenProps) => {
  return (
    <Box flex={1} center bg="white" px="md">
      <Text center size="lg" bold>
        {title}
      </Text>
      <Text center size="sm" color="gray">
        {body}
      </Text>
    </Box>
  );
};

export default MessageScreen;
