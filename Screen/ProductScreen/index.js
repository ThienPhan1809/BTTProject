/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Logo from '../../Component/Logo';
import ListProduct from './ListProduct';
import Button from '../../Component/Button';

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                {/* LIST PRODUCTS */}
                <View style={styles.listProductContainer}>
                    <ListProduct />
                </View>
                {/* BUTTON */}
                <View style={styles.buttonContainer}>
                    <Button text='THANH TOAN' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#DFDFF4',
        alignItems: 'center',
    },
    listProductContainer: {
        marginTop: 12,
        width: Dimensions.get('screen').width - (2 * 20),
        height: Dimensions.get('screen').height - 342,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        height: 68,
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlContainer: {
        backgroundColor: 'gray',
        height: 88,
        width: Dimensions.get('screen').width,
    },
});
