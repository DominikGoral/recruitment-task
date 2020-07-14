import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const oneComics = props => {
    return (
        <View style={styles.ComicsItem}>
            <View style={styles.ComicsTitle}>
                <Text style={styles.ComicsTitleTxt}>{props.ComicsTitle}</Text>
            </View>
            <View style={styles.ComicsImg}>
                <Image style={styles.Img} source={{ uri: `${props.ImgUrl}` }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ComicsItem: {
      flex: 0.2,
      width: '90%',
      backgroundColor: '#fff',
      flexDirection: 'row',
      padding: 10,
      margin: '5%'
    },
    ComicsTitle: {
        width: '50%',
        backgroundColor: '#fff',
        padding: 10
    },
    ComicsTitleTxt: {
        fontSize: 20
    },
    ComicsImg: {
        width: '50%',
    },
    Img: {
        width: '100%',
        height: '100%'
    }
});

export default oneComics