import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, Button, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Reactions from './Reactions';

function DefaultView() {
  const [visible, setVisible] = useState(false);
  const handleToggleVisible = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Reactions visible={visible} />
        <Button onPress={handleToggleVisible} title="toggle visible" />
      </View>
    </SafeAreaView>
  );
}

storiesOf('Reactions', module)
  .add('default view', () => <DefaultView />);


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  content: {
    marginTop: 100,
  }
});