import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Confirmation',
    })
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <IconButton size={50} icon="check" />
        <Text style={styles.title}>Thanks!</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas faucibus augue gravida nibh semper tempus.
        </Text>
      </View>
      <View style={styles.action}>
        <Button
          onPress={goBack}
          style={styles.button}
          mode="contained"
          uppercase={false}>
          Done
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#efefef',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp('10%'),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    height: wp('25%'),
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#fff',    
  },
  title: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    color: 'gray',
    lineHeight: 25,
    paddingTop: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#393847',
  },
});

export default Screen;
