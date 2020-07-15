import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const detailsView = props => {
    return (
        <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: `${props.img}` }} />
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