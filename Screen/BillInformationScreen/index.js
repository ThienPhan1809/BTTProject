import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';

export default function Bill({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.textDetails}>Chai thủy tinh: 3</Text>
                <Text style={styles.textDetails}>Vỏ nhựa: 6</Text>
                <Text style={styles.textDetails}>Vỏ lon: 24</Text>
            </View>
            <View style={styles.sumContainer}>
                <Text style={styles.textSum}>Tạm tính: 32 000 VND</Text>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Chọn địa chỉ');
                }}
            >
                <Text style={styles.textButton}>TIẾP THEO</Text>
            </TouchableOpacity>
        </View>
    );
}

const W = Dimensions.get('window').width - (29 * 2);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFDFF4',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    details: {
        width: W,
        height: Dimensions.get('window').height / 2,
        backgroundColor: '#C4C4C4',
        marginTop: 12,
        padding: 15,
        borderRadius: 8,
    },
    textDetails: {
        fontSize: 20,
    },
    sumContainer: {
        backgroundColor: '#C4C4C4',
        height: 46,
        width: W,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    textSum: {
        fontSize: 24,
    },
    button: {
        height: 60,
        width: Dimensions.get('window').width - (2 * 31),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 12,
        marginBottom: 6,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
