import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'

let W = Dimensions.get('screen').width;

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/Logo1.png')} />
                </View>
                <View style={styles.sloganContainer}>
                    <Text style={styles.text}>VE CHAI KHÔNG CHỈ</Text>
                    <Text style={styles.text}>LÀ VE CHAI</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: 146,
        width: W,
        backgroundColor: '#5FE94950',
        flexDirection:'row',
        borderRadius: 12,
    },
    logoContainer:{
        width: W/2,
        justifyContent: 'center',
    },
    sloganContainer:{
        width: W/2,
        alignItems:'center',
        justifyContent: 'center',
    },
    logo:{
        width: 118,
        height: 110,
        marginLeft: 33,
        borderRadius: 12,
    },
    text:{
        fontSize: 14,
        fontWeight:'bold',
    },
})
