import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios'

import OneComics from './components/Comics/OneComics/OneComics'
import Toolbar from './components/Toolbar/Toolbar'
import DetailsView from './components/Comics/DetailsView/DetailsView'
import LoadingDot from './components/LoadingDot/LoadingDot'

export default class App extends Component  {
  state = {
    comics: [],
    detailsViewMode: false,
    detailsViewImg: '',
    lastComicsIndex: 0,
    isLoading: true
  }

  componentDidMount() {
    this.fetchData()
  }

  changeDetailsMode = () => {
    this.setState({ detailsViewMode: false })
  }

  fetchData = async () => {
    let comicsIndex = 0
    let comicsArray = this.state.comics
    const comicsData = await axios.get('http://xkcd.com/info.0.json')
      const newArray = [{
        title: comicsData.data.title,
        img: comicsData.data.img,
        num: comicsData.data.num
      }]
    comicsIndex = comicsData.data.num
    await this.setState({ comics: this.state.comics.concat(comicsArray, newArray)})
    for(let i = 0; i < 8; i++) {
      const comicsData = await axios.get(`http://xkcd.com/${comicsIndex - 1}/info.0.json`)
      const newArray = [{
        title: comicsData.data.title,
        img: comicsData.data.img,
        num: comicsData.data.num
      }]
      comicsIndex = comicsData.data.num
      await this.setState({ comics: this.state.comics.concat(comicsArray, newArray), lastComicsIndex: comicsIndex})
    }
    await this.setState({ isLoading: false })
  }

  moreData = async() => {
    const comicsArray = this.state.comics
    if(comicsArray.length > 7 && this.state.lastComicsIndex > 1) {
      const comicsData = await axios.get(`http://xkcd.com/${this.state.lastComicsIndex - 1}/info.0.json`)
      const newArray = [{
        title: comicsData.data.title,
        img: comicsData.data.img,
        num: comicsData.data.num
      }]
    await this.setState({ 
      lastComicsIndex: comicsData.data.num,
      comics: this.state.comics.concat(newArray),
      isLoading: false
    })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar detailsView={this.state.detailsViewMode} changeView={this.changeDetailsMode.bind(this)} />
          {this.state.detailsViewMode  
            ? <DetailsView img={this.state.detailsViewImg} />
            : <FlatList
                data={this.state.comics}
                renderItem={({ item }) => (
                  <TouchableOpacity
                  onPress={async () => {
                    await this.setState({ detailsViewImg: item.img })
                    await this.setState({ detailsViewMode: true })
                  }}
                  >
                    <OneComics 
                      ComicsTitle={item.title} 
                      ImgUrl={item.img} 
                    />
                  </TouchableOpacity>
                )}
                onEndReached={async () => {
                  await this.setState({ isLoading: true })
                  await this.moreData()
                }}
                onEndReachedThreshold="0.7"
                keyExtractor={(item, index) => index.toString()}
              />
          }
        <LoadingDot isLoading={this.state.isLoading} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
    marginBottom: 10
  }
});
