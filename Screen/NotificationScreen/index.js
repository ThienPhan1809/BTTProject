import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../../Component/Logo';
import Title from '../../Component/Title';
import NotificationContainer from './NotificationContainer';

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Title text='THÔNG BÁO' />
                <NotificationContainer notification='Đơn hàng đã hoàn thành' />
                <NotificationContainer notification='Nhân viên đang đến' />
                <NotificationContainer notification='Đã nhận đơn hàng' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 12,
    },
});

