import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonSetting from './ButtonSetting';
import Logo from '../../Component/Logo';
import Title from '../../Component/Title';

export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Title text='CÀI ĐẶT' />
                <ButtonSetting text='Thông tin cá nhân' />
                <ButtonSetting text='Lịch sử đặt hàng' />
                <ButtonSetting text='Thông báo' />
                <ButtonSetting text='Đăng xuất' />
                <ButtonSetting text='Thoát' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

