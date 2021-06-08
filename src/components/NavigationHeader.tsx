import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {hasNotch} from '../constants/metrics';
import {theme} from '../constants/theme';

interface NavigationHeader {
  left?: string;
  onPressLeft?: () => void;
  iconLeft?: string;
  title?: string;
  onPressRight?: () => void;
  right?: string;
  iconRight?: string;
}

const blueLight = theme.color.blueLight;

const NavigationHeader = ({
  left,
  onPressLeft,
  iconLeft,
  title,
  onPressRight,
  right,
  iconRight,
}: NavigationHeader) => {
  return (
    <Box
      style={{paddingTop: hasNotch()}}
      dir="row"
      justifyContent="between"
      mb={20}
      px="xs">
      <TouchableOpacity onPress={onPressLeft}>
        <Box dir="row" alignItems="center" justifyContent="center">
          {iconLeft && (
            <FeatherIcon
              name={iconLeft}
              size={15}
              color={blueLight}
              style={styles.icon}
            />
          )}
          <Text style={styles.button}>{left}</Text>
        </Box>
      </TouchableOpacity>
      <Box>
        <Text>{title}</Text>
      </Box>
      <TouchableOpacity onPress={onPressLeft}>
        <Box dir="row" alignItems="center" justifyContent="center">
          {iconRight && (
            <FeatherIcon
              name={iconRight}
              size={15}
              color={blueLight}
              style={styles.icon}
            />
          )}
          <Text style={styles.button}>{right}</Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  button: {
    color: blueLight,
  },
  icon: {
    marginRight: 4,
  },
});
