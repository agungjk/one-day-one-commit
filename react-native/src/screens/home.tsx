import React, { useEffect } from 'react';
import {View, SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';

interface ScreenProps {
  navigation: {
    setOptions: React.FC<{
      headerShown: boolean,
    }>
  },
}

interface renderItem {
  item: any
}

const HomeScreen : React.FC<ScreenProps> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const renderItem: React.FC<renderItem> = ({ item }) => (
    <View style={styles.item}>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>REGULER USEFUL SHOE</Text>
          <Text style={styles.subtitle}>
            Reguler cool shoes is a great every day that will love to use for play
          </Text>
        </View>
      </View>
      <FlatList
        style={styles.lists}
        data={[1,2,3,4,5,6]}
        numColumns={2}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25202a',
  },
  hero: {
    height: 175,
    backgroundColor: '#43334e',
    flexDirection: 'row',
    borderRadius: 5,
    margin: 15,
  },
  image: {
    flex: 0.5,
    backgroundColor: 'silver',
    margin: 15,
  },
  info: {
    flex: 0.5,
    justifyContent: 'center',
    paddingRight: 25,
    paddingLeft: 15,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'justify',
  },
  lists: {
    marginHorizontal: 15,
  },
  item: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
  }
});

export default HomeScreen;