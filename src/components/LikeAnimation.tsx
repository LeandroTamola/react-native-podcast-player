import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

interface LikeAnimationProps {
  onPress: () => void;
  isFirstRun: any;
  animation: any;
  isSubscribed: boolean;
}

const likeJson = require('../assets/lottie/like.json');

const LikeAnimation = ({
  onPress,
  isFirstRun,
  animation,
  isSubscribed,
}: LikeAnimationProps) => {
  useEffect(() => {
    if (isFirstRun.current) {
      if (isSubscribed) {
        animation.current!.play(66, 66);
      } else {
        animation.current.play(19, 19);
      }
      isFirstRun.current = false;
    } else if (isSubscribed) {
      animation.current.play(19, 50);
    } else {
      animation.current.play(0, 19);
    }
  }, [isSubscribed, animation, isFirstRun]);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LottieView
        ref={animation}
        style={styles.heartLottie}
        source={likeJson}
        autoPlay
        loop={false}
      />
    </TouchableWithoutFeedback>
  );
};

export default LikeAnimation;

const styles = StyleSheet.create({
  heartLottie: {
    marginLeft: -5,
    marginTop: -5,
    marginBottom: -20,
    height: 60,
    width: 60,
  },
});
