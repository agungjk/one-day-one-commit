import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput, Snackbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps {
  onDone: () => void
}

const Screen : React.FC<ScreenProps> = ({ onDone }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Create Account'
    })
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. 
        </Text>
        <View style={styles.action}>
          <TextInput
            label="Name"
            mode="outlined"
            outlineColor="#fff"
            style={styles.input}
          />
          <TextInput
            label="Email"
            mode="outlined"
            outlineColor="#fff"
            style={styles.input}
          />
          <TextInput
            label="Password"
            mode="outlined"
            outlineColor="#fff"
            style={styles.input}
          />
          <Button
            onPress={goBack}
            style={styles.button}
            mode="contained"
            uppercase={false}>
            Sign Up
          </Button>
        </View>
        <Text style={styles.link}>
          Have an account? Sign in here
        </Text>
      </View>

      <Snackbar
        visible
        style={styles.error}
        action={{
          label: 'close',
          onPress: () => {},
        }}
        onDismiss={() => {}}>
        Register failed, please try again at the moment.
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#efefef',
    flex: 1,
  },
  content: {
    padding: wp('5%'),
  },
  desc: {
    color: 'grey',
    lineHeight: 20,
    textAlign: 'center',
  },
  link: {
    paddingTop: hp('5%'),
    color: '#393847',
    lineHeight: 20,
    textAlign: 'center',
  },
  action: {
    marginTop: 15,
  },
  input: {
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#393847',
  },
  error: {
    backgroundColor: '#c0392b'
  }
});

export default Screen;
