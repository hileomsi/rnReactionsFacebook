import styled from 'styled-components';
import { Animated } from 'react-native';
import LottieView from "lottie-react-native";

export const ReactionsContainer = styled.View`
  position: relative;
  z-index: 99;
`;
export const ReactionsContent = styled(Animated.View)`
  position: absolute;
  width: 290px;
  flex-direction: row;
  background-color: #FFF;
  padding: 5px;
  border-radius: 50px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.3;
  shadow-radius: 5;
  elevation: 3;
`;
export const Divider = styled.View`
  width: 7px;
`;
export const Emoticon = styled(LottieView)`
  height: 50px;
  width: 50px;
`;