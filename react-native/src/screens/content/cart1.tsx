import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const slides = new Array(5).fill('').map((dt, index) => ({ id: index + 1 }));

const Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Cart',
    })
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const renderItem = () => {
    return (
      <View style={[styles.item, styles.row]}>
        <View style={styles.profile}>
          <Image
            style={styles.img}
            source={require('../../../assets/no-image.png')}
          />
        </View>
        <View style={styles.detail}>
          <View style={styles.row}>
            <Title style={styles.title}>Product One</Title>
            <View style={styles.right}>
              <Text style={styles.price}>
                $ 125
              </Text>
            </View>
          </View>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas faucibus augue gravida nibh semper tempus.
          </Text>
        </View>
      </View>
    )
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <FlatList
          data={slides}
          renderItem={renderItem}
        />        
      </View>
      <View style={styles.action}>
        <Button
          onPress={goBack}
          style={styles.button}
          mode="contained"
          uppercase={false}>
          Checkout
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
  },
  detail: {
    flex: 1,
  },
  img: {
    height: wp('15%'),
    width: wp('15%'),
  },
  action: {
    height: wp('25%'),
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#fff',    
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    padding: 10,
    paddingBottom: 15,
    borderRadius: 3,
    backgroundColor: '#fff',    
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  title: {
    flex: 1,
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
    lineHeight: 20,
    textAlign: 'justify',
    color: 'grey',
  },
  button: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#393847',
  },
  profile: {
    width: wp('15%'),
    height: wp('15%'),
    marginRight: 15,
    borderRadius: wp('15%'),
    backgroundColor: 'silver',
    alignSelf: 'center',
  },
});

export default Screen;
