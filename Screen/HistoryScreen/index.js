import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HistoryContainer from './HistoryContainer';

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HistoryContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

