import { StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const PostContainer = styled.View`
  border-color: #999;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  margin-vertical: 5px;
  
  background-color: #FFFFFF;
`;
export const HeaderContainer = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const HeaderContent = styled.View`
  margin-left: 10px;
`;
export const Name = styled.Text`
  font-weight: bold;
`;
export const DatePost = styled.Text`
  color: #777;
`;
export const Description = styled.Text`
  padding-horizontal: 15px;
  line-height: 20;
  font-size: 14px;
`;
export const Photo = styled.Image`
  width: ${width}px;
  height: 200px;
  margin-top: 15px;
`;
export const InfoContainer = styled.View`
  padding-vertical: 10px;
  padding-horizontal: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Comment = styled.Text`
  color: #777;
`;
export const Reactions = styled.View``;
export const ActionsContainer = styled.View`
  border-color: #CCC;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ActionContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const LabelAction = styled.Text`
  font-weight: 600;
  color: #5F5F5F;
`;
export const IconAction = styled(Feather)`
  margin-right: 5px;
  font-size: 18px;
  color: #5F5F5F;
`;