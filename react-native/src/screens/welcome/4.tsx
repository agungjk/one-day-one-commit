import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
        <View style={styles.imageBox}>
          <Image source={require('../../../assets/no-image.png')} style={styles.image} />
        </View>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Text>
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
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.skip}>
            Skip, use app without account
          </Text>
        </TouchableOpacity>
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
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    borderRadius: 5,
  },
  image: {
    width: wp('15%'),
    height: hp('15%'),
  },
  desc: {
    paddingVertical: 30,
    color: '#9e9da1',
    lineHeight: 20,
    textAlign: 'center',
  },
  skip: {
    marginTop: 5,
    color: '#393847',
    lineHeight: 20,
    textAlign: 'center',
  },
  action: {
    flex: 0.3,
  },
  button: {
    padding: 10,
  },
  buttonSignUp: {
    backgroundColor: '#dddddd',
    marginBottom: 15,
    color: '#000',
  },
  buttonSignUpLabel: {
    color: '#393847',
  },
  buttonLogIn: {
    backgroundColor: '#393847',
  },
});

export default WelcomeScreen;
