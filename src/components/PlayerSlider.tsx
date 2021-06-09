import React from 'react';
import {ProgressComponent} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {Box, Text} from 'react-native-design-utility';
import {StyleSheet} from 'react-native';

import {theme} from '../constants/theme';
import {buildTime} from '../utils';
import {PlayerContext} from '../context/PlayerContext';

class ProgressSlider extends ProgressComponent {
  static contextType = PlayerContext;

  get totalTime(): string {
    return buildTime(this.state.duration - this.state.position);
  }
  get currentTime(): string {
    return buildTime(this.state.position);
  }

  render() {
    return (
      <>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={this.state.duration}
          value={this.state.position}
          onSlidingComplete={value => {
            this.context.goTo(value);
          }}
          minimumTrackTintColor={theme.color.blueLight}
          maximumTrackTintColor={`${theme.color.blueLight}30`}
        />
        <Box dir="row" align="center" justify="between">
          <Text>{this.currentTime}</Text>
          <Text>{this.totalTime}</Text>
        </Box>
      </>
    );
  }
}

export default ProgressSlider;

const styles = StyleSheet.create({
  slider: {width: '100%', height: 40},
});
