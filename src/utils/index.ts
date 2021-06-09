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

export function buildTime(totalSeconds: number): string {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, '0');

  if (hours !== '00') {
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
