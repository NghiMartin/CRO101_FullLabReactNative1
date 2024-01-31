import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './components/lab4/Bai3';
import { useFonts } from 'expo-font';
import Bai1_bottomtabs from './components/lab7/Bai1_bottomtabs';
export default function App() {
  const [fontsLoaded] = useFonts({
    "poppins-bold": require("../CRO101-ReactNative/assets/fonts/Poppins-Bold.otf"),
    "poppins-italic": require("../CRO101-ReactNative/assets/fonts/Poppins-BoldItalic.otf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Bai1_bottomtabs />
  ); 
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
 