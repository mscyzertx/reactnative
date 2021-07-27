import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout1 from './src/components/Layout1';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './src/components/Welcome';
import Layout2 from './src/components/Layout2';
import Layout3 from './src/components/Layout3';
import Layout4 from './src/components/Layout4';
import Layout5 from './src/components/Layout5';
import Layout6 from './src/components/Layout6';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={Welcome}
          />
          <Stack.Screen name="Layout1" component={Layout1} />
          <Stack.Screen name="Layout2" component={Layout2} />
          <Stack.Screen name="Layout3" component={Layout3} />
          <Stack.Screen name="Layout4" component={Layout4} />
          <Stack.Screen name="Layout5" component={Layout5} />
          <Stack.Screen name="Layout6" component={Layout6} />
          
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
