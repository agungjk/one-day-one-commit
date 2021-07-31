import React, { useState, useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps {
  onDone: () => void
}

interface RenderItemProps {
  item: any
}

const slides = [
  {
    key: 'one',
    title: 'How to Get Started 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: require('../../../assets/no-image.png'),
  },
  {
    key: 'two',
    title: 'How to Get Started 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: require('../../../assets/no-image.png'),
  },
  {
    key: 'three',
    title: 'How to Get Started 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: require('../../../assets/no-image.png'),
  }
];

const IntroScreen : React.FC<ScreenProps> = ({ onDone }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [active, setActive] = useState(0);

  const goBack = () => {
    navigation.goBack();
  };

  const renderPagination : React.FC<number> = () => <View />;

  const onSlideChange = (index: number) => {
    setActive(index);
  };

  const renderItem : React.FC<RenderItemProps> = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.imageBox}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
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
    <View style={[styles.screen, { paddingTop: insets.top }]}>
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
      <View style={[styles.content, { paddingBottom: insets.bottom }]}>
        <View style={styles.paging}>
          {renderCircle}
        </View>
        <View style={styles.action}>
          <Button
            onPress={goBack}
            style={styles.button}
            mode="contained"
            uppercase={false}>
            Get Started
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
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('10%'),
  },
  imageBox: {
    height: wp('60%'),
    width: wp('60%'),
    marginBottom: wp('3%'),
    borderRadius: wp('30%'),
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
    backgroundColor: 'silver',
  },
  content: {
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
    marginLeft: 7,
    backgroundColor: '#393847',
  },
});

export default IntroScreen;
