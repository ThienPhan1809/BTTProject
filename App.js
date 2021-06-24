// eslint-disable-next-line import/no-extraneous-dependencies
import { Entypo, MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';


import ProductScreen from './Screen/ProductScreen';
import NotificationScreen from './Screen/NotificationScreen';
import SetScheduleScreen from './Screen/SetScheduleScreen';
import SettingScreen from './Screen/SettingScreen';


StatusBar.setHidden(true);

const ICON_SIZE = 24;

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen 
          name="Product" 
          component={ProductScreen}
          options={{
            title: 'Product',
            tabBarIcon: ({ focused, color }) => < Icon 
              name={focused ? 'home' : 'home-outline'} 
              size={ICON_SIZE} 
              color={color} 
            />,
            tabBarColor: '#ff4757',
        }}
        />
        <Tab.Screen 
          name="Schedule" 
          component={SetScheduleScreen} 
          options={{
            title: 'Cart',
            tabBarIcon: ({ color }) => < Entypo 
              name={'back-in-time'} 
              size={ICON_SIZE} 
              color={color} 
            />,
            tabBarColor: '#ff4757',
        }}
        />
        <Tab.Screen 
          name="Notification" 
          component={NotificationScreen} 
          options={{
            title: 'Notification',
            tabBarIcon: ({ focused, color }) => < Icon 
              name={focused ? 'message-text-outline' : 'android-messages'} 
              size={ICON_SIZE} 
              color={color} 
            />,
            tabBarColor: '#ff4757',
        }}
        />
        <Tab.Screen 
          name="Setting" 
          component={SettingScreen} 
          options={{
            title: 'Setting',
            tabBarIcon: ({ focused, color }) => < Icon 
              name={focused ? 'account-settings-outline' : 'account-settings'} 
              size={ICON_SIZE} 
              color={color} 
            />,
            tabBarColor: '#ff4757',
        }}
        />
      </Tab.Navigator>
      </NavigationContainer>
  );
}

