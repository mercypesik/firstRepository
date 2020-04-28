import React from 'react';
import { View, Text } from 'react-native';

const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = styleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'

    },
    box1: {
        weight: 50,
        backgroundColour: "royalblue"
    },
    box2: {
        weight: 50,
        height: 50,
        backgroundColour: "peru"
    },
    box3: {
        weight: 50,
        height: 50,
        backgroundColour: "greenyellow"
    },
})

export default Layout;