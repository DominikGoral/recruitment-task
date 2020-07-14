import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import OneComics from './components/Comics/OneComics/OneComics'

const data = [
  {
    id: '1',
    title: 'Title nr 1',
    img: 'https://img.joemonster.org/i/2019/11/3-20191105185405.jpg'
  },
  {
    id: '2',
    title: 'Title nr 2',
    img: 'https://img.joemonster.org/i/2019/11/3-20191105185405.jpg'
  },
  {
    id: '3',
    title: 'Title nr 3',
    img: 'https://img.joemonster.org/i/2019/11/3-20191105185405.jpg'
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <OneComics ComicsTitle={item.title} ImgUrl={item.img} />
        )}
      />
      {/* <OneComics ComicsTitle="Some Title" ImgUrl="https://img.joemonster.org/i/2019/11/3-20191105185405.jpg" /> */}
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
