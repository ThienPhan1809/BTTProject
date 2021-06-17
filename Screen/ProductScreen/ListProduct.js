/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    Dimensions, 
    TouchableOpacity, 
    Image, 
    FlatList 
} from 'react-native';
import data from './data';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    handlePress = (item) => {
        this.decrementCount();
        this.setState({ count: item.id });
      }
    renderItem = ({ item, index }) => (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={item.url} style={{ width: 40, height: 40 }} />
                </View>
                <View style={styles.informationContainer}>
                    <Text style={styles.text}>{item.productName}</Text>   
                    <Text style={styles.text}>{item.price} VND/{item.unit}</Text>
                    <View style={styles.chooseNumberOfItemsContainer}>
                        <TouchableOpacity 
                        style={styles.changeNumberOfItemsButton}
                        handlePress={() => {
                            if (this.state.count === 0) return;
                            const i = this.state.count - 1;
                            this.setState({ count: i });
                          }}
                        >
                            <Text style={styles.text}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 5, fontSize: 18 }}>
                            {this.state.count}
                        </Text>
                        <TouchableOpacity 
                        style={styles.changeNumberOfItemsButton}
                        handlePress={() => {
                            if (this.state.index === 10) return;
                            const i = this.state.index + 1;
                            this.setState({ index: i });
                          }}
                        >
                            <Text style={styles.text}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sellButton}>
                    <TouchableOpacity style={styles.button}>
                        <Image 
                            source={require('../../assets/selling.png')} 
                            style={styles.imageSell}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    render() {
        return (
            <View>
                <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item) => `product-${item.id}`}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width - (2 * 31),
        height: 76,
        backgroundColor: '#5FE949',
        borderRadius: 12,
        flexDirection: 'row',
        marginVertical: 5,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    informationContainer: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 12,
    },
    text: {
        fontSize: 16,
    },
    chooseNumberOfItemsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12,
    },
    changeNumberOfItemsButton: {
        backgroundColor: '#FFC107',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    sellButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#FFC107',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSell: {
        width: 34,
        height: 34,
    }
});

