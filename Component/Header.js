/* eslint-disable global-require */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Image 
                        style={{ width: 41, height: 41 }} 
                        source={require('../assets/back.png')} 
                    />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: 78,
        backgroundColor: '#01FB3863',
        flexDirection: 'row',
    },
    button: {
        width: 78,
        height: 78,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01FB3850',
    },
    textContainer: {
        width: Dimensions.get('window').width - 78,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

Header.propTypes = {
    text: PropTypes.string.isRequired,
};
