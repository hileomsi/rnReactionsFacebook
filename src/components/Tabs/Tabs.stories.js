import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Tabs from './Tabs'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  }
});

storiesOf('Tabs', module)
  .add('default view', () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Tabs
          tabSelected="0"
          changeTab={() => {}}
        /> 
      </View>
    </SafeAreaView>
  ));
