/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const H = Dimensions.get('window').height;

export default class ButtonSetting extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: H / 12,
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        borderWidth: 1,
        marginTop: 2,
    },
    text: {
        marginLeft: 24,
        fontSize: 20,
        fontWeight: '500',
    },
});

ButtonSetting.propTypes = {
    text: PropTypes.string.isRequired,
};
