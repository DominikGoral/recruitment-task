import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios'

import OneComics from './components/Comics/OneComics/OneComics'

export default class App extends Component  {
  state = {
    comics: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const comicsData = await axios.get('http://xkcd.com/2332/info.0.json')
    console.log(comicsData.data)
    const comicsArray = this.state.comics
    const newArray = [{
      title: comicsData.data.title,
      img: comicsData.data.img,
      num: comicsData.data.num
    }]
    const secondComicsData = await axios.get('http://xkcd.com/2332/info.0.json')
    const secondComicsArray = this.state.comics
    const secondNewArray = [{
      title: secondComicsData.data.title,
      img: secondComicsData.data.img,
      num: secondComicsData.data.num
    }]
    await this.setState({ comics: this.state.comics.concat(newArray, secondNewArray) })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.comics}
          renderItem={({ item }) => (
            <OneComics ComicsTitle={item.title} ImgUrl={item.img} />
          )}
          keyExtractor={(item, index) => index}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
