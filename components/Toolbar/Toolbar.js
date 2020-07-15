import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

class Toolbar extends Component {
    render() {
        return (
            <View style={styles.ToolbarContainer}>
                {this.props.detailsView
                    ? <Icon name='arrowleft' size={40} color="#000" onPress={() => this.props.changeView()}/>
                    : <Text style={styles.ToolbarContainerText}>XKCD</Text> 
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ToolbarContainer: {
        backgroundColor: '#489fb5',
        height: 60,
        padding: 10,
        marginBottom: 10
    },
    ToolbarContainerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700'
    }
});

export default Toolbar