import React from 'react';
import { TabsContainer, TabContent, TabTouchable, Icon } from './Tabs.styles';

export const Tab = (props) => {
  const { icon, selected, onPress } = props;

  return (
    <TabTouchable onPress={onPress}>
      <TabContent selected={selected}>
        <Icon name={icon} />
      </TabContent>
    </TabTouchable>
  );
}

export default function Tabs(props) {
  const { tabSelected, changeTab } = props;

  function handleChangeTab() {
    
  }

  return (
    <TabsContainer>
      <Tab icon="home" selected />
      <Tab icon="search" />
      <Tab icon="user" />
      <Tab icon="users" />
      <Tab icon="bell" />
      <Tab icon="menu" />
    </TabsContainer>
  );
}