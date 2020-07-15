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
        height: 120,
      width: '90%',
      backgroundColor: '#e9ecef',
      flexDirection: 'row',
      padding: 10,
      marginLeft: '5%',
      marginBottom: '2%'
    },
    ComicsTitle: {
        width: '50%',
        padding: 10
    },
    ComicsTitleTxt: {
        fontSize: 20
    },
    ComicsImg: {
        width: '50%',
    },
    Img: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%'
    }
});

export default oneComics