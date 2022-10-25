import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import SettingsTab from './SettingsTab';

const Tab = createBottomTabNavigator();

const TabRoot = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name='TabHome' component={HomeTab} />
        <Tab.Screen name='TabSettings' component={SettingsTab} />
      </Tab.Navigator>
    </>
  )
}

export default TabRoot

const styles = StyleSheet.create({})