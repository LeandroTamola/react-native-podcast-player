import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Text} from 'react-native-design-utility';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  label: string;
  icon?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button = ({label, icon, onPress, style}: ButtonProps) => {
  return (
    <RectButton onPress={onPress} style={[styles.container, style]}>
      {icon && (
        <FeatherIcon name={icon} size={20} color="purple" style={styles.icon} />
      )}
      <Text bold color="purple">
        {label}
      </Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'rgb(225,225,227)',
    width: '100%',
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
  },
});
