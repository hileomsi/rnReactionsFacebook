import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import Post from '../Post/Post';
import { Page, SafeArea } from './Feed.styles';

export default function Feed(props) {
  const { posts } = props;

  return (
    <Page>
      <SafeArea />
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post {...item} />}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {}}
          />
        }
      />
      <Tabs />
      <SafeArea />
    </Page>
  );
}