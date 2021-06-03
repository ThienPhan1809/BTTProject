import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import ProductScreen from './ProductScreen';
import LocationScreen from './LocationScreen';
import { NavigationContainer } from '@react-navigation/native';

const ICON_SIZE = 24;
const ACTIVE_COLOR = '#FF6C44';
const INACTIVE_COLOR = '#898B9A';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Product" 
        component={ProductScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'home' : 'home-outline'} size={ICON_SIZE} color={color} />,
          tabBarColor: '#ff4757',
        }}
        />
        <Tab.Screen name="Location" component={LocationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
