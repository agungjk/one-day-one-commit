import React, { useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button, IconButton, Title } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const lists = new Array(3).fill('').map((dt, index) => ({ id: index + 1 }));

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

  const renderHeader = (title: String) => useMemo(() => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  ), []);

  const renderItem = () => {
    return (
      <View style={styles.item}>
        <View style={styles.row}>
          <Title style={styles.title}>
            Product One{'\n'}
            <Text style={styles.price}>
              $ 125
            </Text>
          </Title>
          <View style={styles.right}>
            <IconButton size={23} icon="delete" color="grey" />
          </View>
        </View>
      </View>
    )
  };

  const renderTotal = (label: String, value: String, isBold = false) => {
    return (
      <View style={styles.item}>
        <View style={styles.row}>
          <Text style={[styles.label, isBold && styles.bold]}>
            {label}
          </Text>
          <View style={styles.right}>
            <Text style={[styles.value, isBold && styles.bold]}>{value}</Text>
          </View>
        </View>
      </View>
    )
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View>
          <FlatList
            data={lists}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader('Your Products')}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
        {renderHeader('Total')}     
        {renderTotal('Subtotal', '$169')}     
        {renderTotal('Shipping', '$44')}     
        {renderTotal('Texes', '$26')}     
        {renderTotal('Total', '$239', true)}     
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
    borderBottomColor: 'silver',
  },
  header: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'grey',
    fontWeight: 'bold',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  label: {
    flex: 1,
    fontSize: 16,
    paddingTop: 5,
  },
  value: {
    color: 'silver',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    lineHeight: 20,
    textAlign: 'justify',
    color: 'silver',
  },
  button: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#393847',
  },
});

export default Screen;
