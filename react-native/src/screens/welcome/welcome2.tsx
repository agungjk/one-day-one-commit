import React, { useState, useMemo } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ScreenProps {
  onDone: () => void
}

interface RenderItemProps {
  item: any
}

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

const IntroScreen : React.FC<ScreenProps> = ({ onDone }) => {
  const [active, setActive] = useState(0);

  const renderPagination : React.FC<number> = () => <View />;

  const onSlideChange = (index: number) => {
    setActive(index);
  };

  const renderItem : React.FC<RenderItemProps> = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  }

  const renderCircle : React.ReactNode = useMemo(() => slides.map(
    (dt, index) => {
      const style = index == active ? {backgroundColor: '#000'} : {};
      return <View key={index} style={[styles.circle, style]} />
    }
  ), [active]);

  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        showNextButton={false}
        showDoneButton={false}
        dotClickEnabled={false}
        renderPagination={renderPagination}
        onSlideChange={onSlideChange}
        data={slides}
        onDone={onDone}
        renderItem={renderItem}
      />
      <View style={styles.content}>
        <View style={styles.paging}>
          {renderCircle}
        </View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Text>
        <View style={styles.action}>
          <Button
            style={[styles.button, styles.buttonSignUp]}
            labelStyle={styles.buttonSignUpLabel}
            mode="contained"
            uppercase={false}>
            Sign Up
          </Button>
          <Button style={[styles.button, styles.buttonLogIn]} mode="contained" uppercase={false}>
            Log In
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flex: 1,
  },
  slide: {
    marginHorizontal: wp('3%'),
    marginBottom: wp('3%'),
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  paging: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  circle: {
    width: 10,
    height: 10,
    marginHorizontal: 3,
    borderRadius: 15,
    backgroundColor: '#efefef',
  },
  content: {
    flex: 0.4,
    backgroundColor: '#fff',
    padding: wp('5%'),
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

export default IntroScreen;
