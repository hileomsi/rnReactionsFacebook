import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Post from './Post';

const props = {
  id: 1,
  user: {
    name: 'Hiléo Andersson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/koridhandy/128.jpg'
  },
  createdAt: 'Saturday at 17:00',
  description: 'Hic quia dolor. Natus dolorem dicta rem ut architecto est sunt. In recusandae rem qui et quis. Provident consequuntur excepturi similique quo et. Et qui beatae ducimus ipsam dolore ut nihil deleniti.',
  photo: 'https://images.unsplash.com/photo-1571825224369-48338bfedb5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  comments: '70 Comments'
};

storiesOf('Post', module)
  .add('default view', () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Post {...props} />
      </View>
    </SafeAreaView>
  ))
  .add('multiple posts view', () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <Post {...props} />
          <Post {...props} />
          <Post {...props} />
        </ScrollView>
      </View>
    </SafeAreaView>
  ));


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0D0D0',
    flex: 1,
  },
});