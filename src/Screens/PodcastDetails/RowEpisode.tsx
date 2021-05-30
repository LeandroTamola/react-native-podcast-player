import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {removeHtmlTags, getDay, getDuration} from '../../utils';

interface RowEpisodeProps {
  item: any;
}

const RowEpisode = ({item}: RowEpisodeProps) => {
  return (
    <Box p="xs">
      <Text size="xs" color="grey" bold>
        {getDay(item.pubDate).toUpperCase()}
      </Text>
      <Text bold>{item.title}</Text>
      <Text size="sm" color="greyDarkest" numberOfLines={2} mb="xs">
        {removeHtmlTags(item.description)}
      </Text>
      <Text size="xs" color="greyDark">
        {getDuration(item.duration)}
      </Text>
    </Box>
  );
};

export default RowEpisode;
