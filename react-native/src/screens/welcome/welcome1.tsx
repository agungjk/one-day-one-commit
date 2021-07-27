import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface ScreenProps { }

interface RenderItemProps { item: any }

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/no-image.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../assets/no-image.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../assets/no-image.png'),
    backgroundColor: '#22bcb5',
  }
];

const IntroScreen : React.FC<ScreenProps> = () => {
  const navigation = useNavigation();

  const onDone = () => navigation.navigate('Home');

  const renderItem : React.FC<RenderItemProps> = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: wp('90%'),
    height: hp('40%'),
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

export default IntroScreen;
