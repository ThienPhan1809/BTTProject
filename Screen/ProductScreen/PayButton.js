/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export default class PayButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: Dimensions.get('screen').width - (2 * 31),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 12,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});

PayButton.propTypes = {
    text: PropTypes.string.isRequired,
};
