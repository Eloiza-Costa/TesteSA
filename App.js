import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { View } from 'react-native'
import Sa from './src/components/Sa'

export default function App() {
  return(
    <View>
      <StatusBar style="auto"/>

      <Sa/>
    </View>
  )
}