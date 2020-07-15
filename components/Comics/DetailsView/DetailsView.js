import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const detailsView = props => {
    return (
        <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: "https://3.allegroimg.com/s512/1100c7/381fec064f4ab4614ed5412cd643/PLAKATY-OBRAZKI-DZIECIECE-skandynawskie-A3-wybor" }} />
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    }
});
  
export default detailsView