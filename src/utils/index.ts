export const removeHtmlTags = (string: string) => {
  return string.trim().replace(/<[^>]*>/g, '');
};

export const getDay = (string: string) => {
  return new Date(string).toLocaleString('en-us', {weekday: 'long'});
};

export const getDuration = (string: string) => {
  const duration = string.split(':');
  return `${+duration[0]}hrs. ${+duration[1]}min`;
};
