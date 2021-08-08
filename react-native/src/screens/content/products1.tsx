import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Title } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const data = [...Array(6).keys()];

const Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Products',
    })
  }, []);

  const renderItem = ({ index } : { index : any }) => (
    <View style={styles.item} key={index}>
      <Image
        style={styles.img}
        source={require('../../../assets/no-image.png')}
      />
      <Title style={styles.title}>Product {index + 1}</Title>
      <Text style={styles.desc}>
        $ 125
      </Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#efefef',
    flex: 1,
    flexGrow: 2,
    paddingTop: 10,
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#fff',    
  },
  img: {
    backgroundColor: '#efefef',
    width: '100%',
    height: wp('35%'),
  },
  title: {
    paddingTop: 5,
    fontSize: 16,
  },
  desc: {
    color: 'grey',
    lineHeight: 20,
  },
});

export default Screen;
