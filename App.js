import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Position from './Position';

export default function App() {
  return (
    <View style ={styles.container}>
      <Text style={styles.heading}>Current weather</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 37,
    paddingBottom: 25
  }
});
