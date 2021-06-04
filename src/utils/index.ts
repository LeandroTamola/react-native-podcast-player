import ImageColors from 'react-native-image-colors';

export const removeHtmlTags = (string: string) => {
  return string.replace(/<[^>]*>/g, '').trim();
};

export const getDay = (string: string) => {
  return new Date(string).toLocaleString('en-us', {weekday: 'long'});
};

export const getDuration = (string: string) => {
  const duration = string.split(':');
  if (duration.length > 1) {
    return `${+duration[0]}hrs. ${+duration[1]}min`;
  }
  return `${+duration[0].slice(0, 2)}min`;
};
