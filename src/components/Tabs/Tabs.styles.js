import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const TabsContainer = styled.View`
  background-color: #FFF;
  border-top-color: #E5E5E5;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  flex-direction: row;
  justify-content: space-around;
`;

export const TabContent = styled.View`
  background-color: #FFF;
  width: 65px;
  height: 45px;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 3px;
  border-top-color: #FFF;

  ${props => props.selected && css`
    border-top-color: #1877F2;
  `}
`;

export const TabTouchable = styled.TouchableOpacity`
`;

export const Icon = styled(Feather)`
  font-size: 20px
  color: #777;
`;