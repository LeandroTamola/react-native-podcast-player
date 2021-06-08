import deviceInfo from 'react-native-device-info';

export const makeHitSlop = (size: number) => ({
  top: size,
  right: size,
  bottom: size,
  left: size,
});

export const hasNotch = () => (deviceInfo.hasNotch() ? 40 : 0);
