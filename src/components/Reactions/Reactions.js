import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Easing, } from 'react-native';
import LottieView from "lottie-react-native";
import {
  ReactionsContainer,
  ReactionsContent,
  EmoticonContainer,
  Emoticon,
  Divider,
} from './Reactions.styles';

export default function Reactions(props) {
  const { visible } = props;
  const [opacity] = useState(new Animated.Value(0));
  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1],
  });
  const translateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [20, -40],
  });
  
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 150,
    }).start();
  }, [visible]);

  return (
    <ReactionsContainer>
      <ReactionsContent
        style={{
          opacity,
          transform: [
            { scale },
            { translateY }
          ]
        }}
      >
        <Emoticon
          source={require('../../assets/lottie/love.json')}
          autoPlay
          loop
        />
        <Divider />
        <Emoticon
          source={require('../../assets/lottie/haha.json')}
          autoPlay
          loop
        />
        <Divider />
        <Emoticon
          source={require('../../assets/lottie/meh.json')}
          autoPlay
          loop
        />
        <Divider />
        <Emoticon
          source={require('../../assets/lottie/sad.json')}
          autoPlay
          loop
        />
        <Divider />
        <Emoticon
          source={require('../../assets/lottie/angry.json')}
          autoPlay
          loop
        />
      </ReactionsContent>
    </ReactionsContainer>
  );
};