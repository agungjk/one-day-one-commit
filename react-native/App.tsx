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
import Welcome6Screen from './src/screens/welcome/6';
import Welcome7Screen from './src/screens/welcome/7';
import AuthLogin1Screen from './src/screens/auth/login1';
import AuthRegister1Screen from './src/screens/auth/register1';
import AuthReset1Screen from './src/screens/auth/reset1';
import ContentHome1Screen from './src/screens/content/home1';
import TOCScreen from './src/screens/table-of-contents';

const Stack = createStackNavigator();

interface NavigationProps {
  navigation: any,
  previous: any,
  scene: any
}

const CustomNavigationBar = ({ navigation, previous, scene } : NavigationProps) => {
  const title = scene?.descriptor?.options?.title
    ? scene?.descriptor?.options?.title
    : 'React Native Wireframe';

  const renderRightAction = () => {
    switch (scene.route.key) {
      case 'ContentHome1':
        return (
          <>
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <Appbar.Action icon="plus" onPress={() => {}} />          
          </>
        );
    }
  }
 
  return (
    <Appbar.Header style={{ backgroundColor: '#fff', elevation: 1 }}>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {renderRightAction()}
    </Appbar.Header>
  );
}

const hideHeader = {
  header: (props: any) => <CustomNavigationBar {...props} />,
};

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
            <Stack.Screen name="Welcome6" component={Welcome6Screen} />
            <Stack.Screen name="Welcome7" component={Welcome7Screen} />
            <Stack.Screen name="AuthLogin1" component={AuthLogin1Screen} />
            <Stack.Screen name="AuthRegister1" component={AuthRegister1Screen} />
            <Stack.Screen name="AuthReset1" component={AuthReset1Screen} />
            <Stack.Screen name="ContentHome1" component={ContentHome1Screen} />
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
