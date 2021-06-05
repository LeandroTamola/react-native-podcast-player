import React from 'react';
import {theme} from '../constants/theme';
import HTML from 'react-native-render-html';

interface HTMLReaderProps {
  text: string;
}

const HTMLReader = ({text}: HTMLReaderProps) => {
  return (
    <HTML
      source={{html: text}}
      tagsStyles={{a: {color: theme.color.blueLight, fontWeight: 'bold'}}}
    />
  );
};

export default HTMLReader;
