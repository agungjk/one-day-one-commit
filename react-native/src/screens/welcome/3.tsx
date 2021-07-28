import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps {
  onDone: () => void
}

const WelcomeScreen : React.FC<ScreenProps> = ({ onDone }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.screen, { marginTop: insets.top, marginBottom: insets.bottom }]}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Text>
        <View style={styles.imageBox}>
          <Image source={require('../../../assets/no-image.png')} style={styles.image} />
        </View>
        <View style={styles.action}>
          <Button
            onPress={goBack}
            style={[styles.button, styles.buttonSignUp]}
            labelStyle={styles.buttonSignUpLabel}
            mode="contained"
            uppercase={false}>
            Sign Up
          </Button>
          <Button
            onPress={goBack}
            style={[styles.button, styles.buttonLogIn]}
            mode="contained"
            uppercase={false}>
            Log In
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#efefef',
    flex: 1,
    marginHorizontal: 15,
  },
  imageBox: {
    marginHorizontal: wp('3%'),
    marginBottom: wp('3%'),
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: wp('15%'),
    height: hp('15%'),
  },
  title: {
    fontSize: 22,
    paddingTop: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  desc: {
    paddingTop: 10,
    color: '#9e9da1',
    lineHeight: 20,
    textAlign: 'center',
  },
  action: {
    flexDirection: 'row',
    marginTop: 25,
  },
  button: {
    flex: 1,
    padding: 10,
  },
  buttonSignUp: {
    backgroundColor: '#efefef',
    marginRight: 7,
    color: '#000',
  },
  buttonSignUpLabel: {
    color: '#393847',
  },
  buttonLogIn: {
    marginLeft: 7,
    backgroundColor: '#393847',
  },
});

export default WelcomeScreen;
