import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 15px;
  padding-vertical: 10px;
  border-color: #CCC;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  background-color: #FFF;
`;
export const Title = styled.Text`
  flex: 1;
  font-size: 36px;
  font-weight: bold;
  color: #1877F2;
  letter-spacing: -1px;
`;
export const IconContainer = styled.View`
  background-color: #EEE;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(Feather)`
  font-size: 20px;
`;
export const Divider = styled.View`
  width: 10px;
`;