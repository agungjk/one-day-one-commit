import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import WelcomeScreen from './src/screens/welcome';
import HomeScreen from './src/screens/home';

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
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            header: CustomNavigationBar,
          }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={hideHeader} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
