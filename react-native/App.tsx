import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import IntroScreen from './src/screens/intro';
import HomeScreen from './src/screens/home';

const Stack = createStackNavigator();

function CustomNavigationBar() {
  return (
    <Appbar.Header>
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
}

export default function App() {
  const [isShowIntro, showIntro] = useState(true);

  const onDone = () => {
    showIntro(false);
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        {isShowIntro ? <IntroScreen onDone={onDone} /> : (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: CustomNavigationBar,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>        
        )}
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
