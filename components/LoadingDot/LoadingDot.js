import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

import Icon from 'react-native-vector-icons/AntDesign'

const loadingDots = props => {
    return (
        <View style={styles.dotContainer}>
            {props.isLoading === true
              ? <Icon style={styles.dot} name='sync' size={30} /> 
              : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dotContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingTop: 10
    },
    dot: {
    }
});

export default loadingDots