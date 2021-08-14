import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WelcomeScreen from './src/screens/welcome/1';
import Welcome2Screen from './src/screens/welcome/2';
import Welcome3Screen from './src/screens/welcome/3';
import Welcome4Screen from './src/screens/welcome/4';
import Welcome5Screen from './src/screens/welcome/5';
import Welcome6Screen from './src/screens/welcome/6';
import Welcome7Screen from './src/screens/welcome/7';
import AuthLoginScreen from './src/screens/auth/login';
import AuthRegisterScreen from './src/screens/auth/register';
import AuthResetScreen from './src/screens/auth/reset';
import ContentHomeScreen from './src/screens/content/home';
import ContentProductsScreen from './src/screens/content/products';
import ContentDetailScreen from './src/screens/content/detail';
import ContentDetail2Screen from './src/screens/content/detail2';
import ContentCartScreen from './src/screens/content/cart';
import ContentCart2Screen from './src/screens/content/cart2';
import ContentConfirmationScreen from './src/screens/content/confirmation';
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
    const isMagnifyEnable = [
      'ContentHome1',
      'ContentProducts1',
      'ContentDetail1',
      'ContentDetail2',
      'ContentCart1',
      'ContentCart2',
    ].includes(scene.route.key);
    const isPlusEnable = [ 'ContentHome1' ].includes(scene.route.key);
    const isCartEnable = [
      'ContentProducts1',
      'ContentDetail1',
      'ContentDetail2',
      'ContentCart1',
      'ContentCart2',
    ].includes(scene.route.key);

    return (
      <>
        {isMagnifyEnable && <Appbar.Action icon="magnify" onPress={() => {}} />}
        {isPlusEnable && <Appbar.Action icon="plus" onPress={() => {}} />}
        {isCartEnable && <Appbar.Action icon="cart" onPress={() => {}} />}
      </>
    );
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
            <Stack.Screen name="Welcome1" component={WelcomeScreen} />
            <Stack.Screen name="Welcome2" component={Welcome2Screen} />
            <Stack.Screen name="Welcome3" component={Welcome3Screen} />
            <Stack.Screen name="Welcome4" component={Welcome4Screen} />
            <Stack.Screen name="Welcome5" component={Welcome5Screen} />
            <Stack.Screen name="Welcome6" component={Welcome6Screen} />
            <Stack.Screen name="Welcome7" component={Welcome7Screen} />
            <Stack.Screen name="AuthLogin1" component={AuthLoginScreen} />
            <Stack.Screen name="AuthRegister1" component={AuthRegisterScreen} />
            <Stack.Screen name="AuthReset1" component={AuthResetScreen} />
            <Stack.Screen name="ContentHome1" component={ContentHomeScreen} />
            <Stack.Screen name="ContentProducts1" component={ContentProductsScreen} />
            <Stack.Screen name="ContentDetail1" component={ContentDetailScreen} />
            <Stack.Screen name="ContentDetail2" component={ContentDetail2Screen} />
            <Stack.Screen name="ContentCart1" component={ContentCartScreen} />
            <Stack.Screen name="ContentCart2" component={ContentCart2Screen} />
            <Stack.Screen name="ContentConfirmation" component={ContentConfirmationScreen} />
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
