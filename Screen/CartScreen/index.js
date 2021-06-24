import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Logo from '../../Component/Logo';

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
    }
});
