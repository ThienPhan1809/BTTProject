import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Final Bill Information </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

