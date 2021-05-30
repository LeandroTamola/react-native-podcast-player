import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';
import TrackPlayer from 'react-native-track-player';

import {theme} from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainNavigator';
import {client} from './src/graphql/client';
import trackPlayerServices from './src/services/trackPlayerServices';

const track = {
  id: '1',
  url: 'https://media.transistor.fm/39765eda/0e219b35.mp3',
  title:
    ' Ben Orenstein - How to Stand Out When Applying for a Job at a Small Company',
  artist: 'Full Stack Radio',
};

const App = () => {
  useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() =>
        console.log('Player is ready'),
      );
      TrackPlayer.registerPlaybackService(() => trackPlayerServices);
      await TrackPlayer.add([track]);
      await TrackPlayer.play();

      setTimeout(() => {
        TrackPlayer.stop();
      }, 10000);
    })();
  }, []);
  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </UtilityThemeProvider>
  );
};

export default App;
