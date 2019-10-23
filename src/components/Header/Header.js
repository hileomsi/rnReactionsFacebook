import React from 'react';
import { View, Text } from 'react-native';
import {
  HeaderContainer,
  Title,
  IconContainer,
  Icon,
  Divider,
} from './Header.styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Title>facebook</Title>
      <IconContainer>
        <Icon name="search" />
      </IconContainer>
      <Divider />
      <IconContainer>
        <Icon name="message-square" />
      </IconContainer>
    </HeaderContainer>
  );
}