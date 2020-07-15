import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Toolbar extends Component {
    render() {
        return (
            <View style={styles.ToolbarContainer}>
                {this.props.detailsView
                    ? <Text style={styles.ToolbarContainerText}>TRUE</Text>
                    : <Text style={styles.ToolbarContainerText}>XKCD</Text> 
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ToolbarContainer: {
        backgroundColor: '#489fb5',
        padding: 10
    },
    ToolbarContainerText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700'
    }
});

export default Toolbar