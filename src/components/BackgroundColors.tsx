import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import ImageColors from 'react-native-image-colors';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants/theme';

import LoadingScreen from './LoadingScreen';

const initialState = {
  colorOne: {value: '', name: ''},
  colorTwo: {value: '', name: ''},
  colorThree: {value: '', name: ''},
  colorFour: {value: '', name: ''},
  rawResult: '',
};

export default function BackgroundColors({image, children}: any) {
  const [colors, setColors] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const fetchColors = useCallback(async () => {
    const result = await ImageColors.getColors(image, {
      fallback: '#000000',
      quality: 'low',
      pixelSpacing: 5,
      cache: true,
    });

    if (result.platform === 'android') {
      setColors({
        colorOne: {value: result.average!, name: 'average'},
        colorTwo: {value: result.dominant!, name: 'dominant'},
        colorThree: {value: result.vibrant!, name: 'vibrant'},
        colorFour: {value: result.darkVibrant!, name: 'darkVibrant'},
        rawResult: JSON.stringify(result),
      });
    } else {
      setColors({
        colorOne: {value: result.background, name: 'background'},
        colorTwo: {value: result.detail, name: 'detail'},
        colorThree: {value: result.primary, name: 'primary'},
        colorFour: {value: result.secondary, name: 'secondary'},
        rawResult: JSON.stringify(result),
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchColors();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.5}}
      colors={[colors.colorFour.value, theme.color.greyLightest]}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
