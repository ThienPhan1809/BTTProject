/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Title extends Component {
    render() {
        return (
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{this.props.text}</Text>
                <Text style={styles.text}>----------------------------------</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

Title.propTypes = {
    text: PropTypes.string.isRequired,
};
