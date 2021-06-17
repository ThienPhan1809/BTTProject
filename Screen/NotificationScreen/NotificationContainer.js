/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


export default class NotificationContainer extends Component {
    render() {
        return (
                <TouchableOpacity style={styles.notificationContainer}>
                    <Text style={styles.textNotification}> {this.props.notification} </Text>
                    <Text style={styles.textDetail}> {'>>'} Nhấn để xem chi tiết </Text>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    notificationContainer: {
        backgroundColor: '#FFC10750',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 7,
        justifyContent: 'center',
        borderWidth: 2,
        marginTop: 1,
    },
    textNotification: {
        marginLeft: 24,
        fontWeight: 'bold',
    },
    textDetail: {
        marginLeft: 24,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
});

NotificationContainer.propTypes = {
    notification: PropTypes.string.isRequired,
};
