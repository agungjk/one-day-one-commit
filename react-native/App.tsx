import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome1Screen from './src/screens/welcome/1';
import Welcome2Screen from './src/screens/welcome/2';
import Welcome3Screen from './src/screens/welcome/3';
import Welcome4Screen from './src/screens/welcome/4';
import Welcome5Screen from './src/screens/welcome/5';
import TOCScreen from './src/screens/table-of-contents';

const Stack = createStackNavigator();

function CustomNavigationBar() {
  return (
    <Appbar.Header>
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
}

const hideHeader = { headerShown: false };

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Root"
            screenOptions={hideHeader}>
            <Stack.Screen name="Root" component={TOCScreen} />
            <Stack.Screen name="Welcome1" component={Welcome1Screen} />
            <Stack.Screen name="Welcome2" component={Welcome2Screen} />
            <Stack.Screen name="Welcome3" component={Welcome3Screen} />
            <Stack.Screen name="Welcome4" component={Welcome4Screen} />
            <Stack.Screen name="Welcome5" component={Welcome5Screen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
