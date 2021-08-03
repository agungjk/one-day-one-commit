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
      title: 'Forgot Password'
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
            label="Email"
            mode="outlined"
            outlineColor="#fff"
            style={styles.input}
          />
          <Button
            onPress={goBack}
            style={styles.button}
            mode="contained"
            uppercase={false}>
            Reset Password
          </Button>
        </View>
      </View>

      <Snackbar
        visible
        style={styles.success}
        action={{
          label: 'close',
          onPress: () => {},
        }}
        onDismiss={() => {}}>
        Please check your email for further instruction.
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
  success: {
    backgroundColor: '#16a085'
  }
});

export default Screen;
