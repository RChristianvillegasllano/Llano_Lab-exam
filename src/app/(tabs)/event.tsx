import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Events</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  }
});
