/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index: 0,
    };
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={this.props.source} style={{ width: 40, height: 40 }} />
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>{this.props.productName}</Text>   
          <Text style={styles.text}>{this.props.price} VND/{this.props.unit}</Text>
          <View style={styles.chooseNumberOfItemsContainer}>
              <TouchableOpacity 
              style={styles.changeNumberOfItemsButton}
              onPress={() => {
                  if (this.state.index === 0) return;
                  const i = this.state.index - 1;
                  this.setState({ index: i });
                }}
              >
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 5, fontSize: 18 }}>
                  {this.state.index}
              </Text>
              <TouchableOpacity 
              style={styles.changeNumberOfItemsButton}
              onPress={() => {
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

Product.propTypes = {
  source: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.string,
  unit: PropTypes.string,
};
