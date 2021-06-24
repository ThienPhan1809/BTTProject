/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import BillInformationScreen from '../BillInformationScreen';
import SetScheduleScreen from '../SetScheduleScreen';
import LocationScreen from '../LocationScreen';
import FinalBillInformationScreen from '../FinalBillInformationScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode='screen'>
      <Stack.Screen name='Trang chủ' component={Home} />
      <Stack.Screen name='Đơn Hàng' component={BillInformationScreen} />
      <Stack.Screen name='Lên lịch Thu Mua' component={SetScheduleScreen} />
      <Stack.Screen name='Chọn địa chỉ' component={LocationScreen} />
      <Stack.Screen name='Chi Tiết Đơn Hàng' component={FinalBillInformationScreen} />
    </Stack.Navigator>
  );
}
