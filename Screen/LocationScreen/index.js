/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Header from '../../Component/Header';
import Button from '../../Component/Button';
import ChooseLocation from './ChooseLocation';   

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header text='CHỌN ĐỊA CHỈ' />
                <View style={styles.mapContainer}>
                    <ChooseLocation />
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 12 }}>
                        Địa chỉ được chọn: 
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button text='HOÀN THÀNH' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#DFDFF4'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonContainer: {
        height: 68,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
