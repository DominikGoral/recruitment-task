import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OneComics from './components/Comics/OneComics/OneComics'

export default function App() {
  return (
    <View style={styles.container}>
      <OneComics ComicsTitle="Some Title" ImgUrl="https://img.joemonster.org/i/2019/11/3-20191105185405.jpg" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#364536',
  }
});
