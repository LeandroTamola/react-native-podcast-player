import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';
import TrackPlayer from 'react-native-track-player';

import {theme} from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainNavigator';
import {client} from './src/graphql/client';
import {ActivityIndicator} from 'react-native';
import {PlayerContextProvider} from './src/context/PlayerContext';

const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => console.log('Player is ready'));

    TrackPlayer.updateOptions({
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      ],
      jumpInterval: 30,
    });
    setIsReady(true);
  }, []);
  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {isReady ? (
          <PlayerContextProvider>
            <NavigationContainer>
              <MainStackNavigator />
            </NavigationContainer>
          </PlayerContextProvider>
        ) : (
          <Box f={1} center>
            <ActivityIndicator />
          </Box>
        )}
      </ApolloProvider>
    </UtilityThemeProvider>
  );
};

export default App;
