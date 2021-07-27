import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout1 from './src/components/Layout1';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text>
      <StatusBar style="auto" /> */}
      <Layout1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
