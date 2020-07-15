import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const detailsView = props => {
    return (
        <View style={styles.imgContainer}>
            <Text>DETAILS VIEW</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%'
    },
    imgContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Img: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%'
    }
});
  
export default detailsView