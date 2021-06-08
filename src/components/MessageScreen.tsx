import React from 'react';
import {Box, Text} from 'react-native-design-utility';

interface MessageScreenProps {
  text: string;
}

const MessageScreen = ({text}: MessageScreenProps) => {
  return (
    <Box flex={1} center bg="white">
      <Text size="lg" color="gray">
        {text}
      </Text>
    </Box>
  );
};

export default MessageScreen;
