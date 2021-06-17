import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../Component/Logo';
import Title from '../../Component/Title';

export default class HistoryContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Title text='LỊCH SỬ' />
                <Text style={styles.text}> Không bán sản phẩm nào gần đây </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 18,
    }
});
