import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import Logo from '../../Component/Logo';
import ListProduct from './ListProduct';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Logo />
            {/* LIST PRODUCTS */}
            <View style={styles.listProductContainer}>
                <ListProduct />
            </View>
            {/* BUTTON */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate('Đơn Hàng');
                    }}
                >
                    <Text style={styles.text}>THANH TOÁN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFDFF4',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listProductContainer: {
        marginTop: 6,
        width: Dimensions.get('screen').width - (2 * 20),
        height: Dimensions.get('screen').height - 342,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        height: 60,
        width: Dimensions.get('window').width - (2 * 31),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 12,
        marginBottom: 6,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
