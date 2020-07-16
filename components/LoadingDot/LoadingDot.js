import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

import Icon from 'react-native-vector-icons/AntDesign'

const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

class LoadingDots extends Component {
    render() {
        return (
            <View style={styles.dotContainer}>
                {this.props.isLoading === true
                  ? <AnimatedIcon animation={reverseFlippingAnimation} style={styles.dot} name='sync' size={30} /> 
                  : null
                }
            </View>
        )
    }
}

const reverseFlippingAnimation = {
    0:{
       rotateY: '0deg'
    },
    1:{
       rotateY: '360deg'
    }
 }

const sizeAnimation = {
    from:{
       size: 20
    },
    to:{
       size: 30
    }
}

const styles = StyleSheet.create({
    dotContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingTop: 10
    }
});

export default LoadingDots