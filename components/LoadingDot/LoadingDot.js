import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

import Icon from 'react-native-vector-icons/AntDesign'

const loadingDots = props => {
    return (
        <View style={styles.dotContainer}>
            <Icon style={styles.dot} name='sync' size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    dotContainer: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dot: {

    }
});

export default loadingDots