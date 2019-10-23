import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Header from './Header';

storiesOf('Header', module)
  .add('default view', () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header /> 
      </View>
    </SafeAreaView>
  ));


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});