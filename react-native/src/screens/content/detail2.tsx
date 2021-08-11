import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const flatListOptimizationProps = {
  initialNumToRender: 0,
  maxToRenderPerBatch: 1,
  removeClippedSubviews: true,
  scrollEventThrottle: 16,
  windowSize: 2,
  keyExtractor: (item : { id: number }) => String(item?.id),
};

const slides = new Array(5).fill('').map((dt, index) => ({ id: index + 1 }));
console.log('slides', slides);


const Screen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    navigation.setOptions({
      title: 'Product Slide',
    })
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const renderItem = () => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.img}
          source={require('../../../assets/no-image.png')}
        />
      </View>
    )
  };

  const renderCircle = useMemo(() => slides.map(
    (dt, idx) => {
      const style = idx == index ? {backgroundColor: '#000'} : {};
      return <View key={idx} style={[styles.circle, style]} />
    }
  ), [index]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <View style={styles.paging}>
        {renderCircle}
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Title style={styles.title}>Product One</Title>
          <View style={styles.right}>
            <Text style={styles.price}>
              $ 125
            </Text>
          </View>
        </View>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus augue gravida nibh semper tempus. Fusce ut rutrum erat, ut elementum mi.
        </Text>
        <Button
          onPress={goBack}
          style={styles.button}
          mode="contained"
          uppercase={false}>
          Buy Now
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
    flex: 0.5,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#fff',    
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 3,
    width: wp('100%') - 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: wp('30%'),
    height: wp('30%'),
  },
  title: {
    flex: 1,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
  },
  price: {
    textAlign: 'right',
    color: 'grey',
    fontSize: 16,
    lineHeight: 20,
  },
  desc: {
    paddingTop: 10,
    lineHeight: 20,
    textAlign: 'justify',
  },
  button: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#393847',
  },
  paging: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: "absolute",
    top: hp('58%'),
    left: 0,
    right: 0,
    width: "100%",
  },
  circle: {
    width: 10,
    height: 10,
    marginHorizontal: 3,
    borderRadius: 15,
    backgroundColor: 'silver',
  },
});

export default Screen;
