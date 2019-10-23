import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Post from './Post';

storiesOf('Post', module)
  .add('default view', () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Post />
      </View>
    </SafeAreaView>
  ))
  .add('multiple posts view', () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <Post />
          <Post />
          <Post />
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