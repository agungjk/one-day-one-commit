import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

interface ItemProps {
  item: {
    screen: String;
    image: any;
  }
};

interface HeaderProps {
  section: any;
}

const TableOfContents : React.FC = () => {
  const navigation = useNavigation();

  const [items, setItems] = React.useState([
    {
      title: 'Welcome Screen',
      data: [
        {
          image: require('../../assets/screenshots/welcome1.png'),
          screen: 'Welcome1',
        },
        {
          image: require('../../assets/screenshots/welcome6.png'),
          screen: 'Welcome6',
        },
        {
          image: require('../../assets/screenshots/welcome7.png'),
          screen: 'Welcome7',
        },
        {
          image: require('../../assets/screenshots/welcome2.png'),
          screen: 'Welcome2',
        },
        {
          image: require('../../assets/screenshots/welcome3.png'),
          screen: 'Welcome3',
        },
        {
          image: require('../../assets/screenshots/welcome4.png'),
          screen: 'Welcome4',
        },
        {
          image: require('../../assets/screenshots/welcome5.png'),
          screen: 'Welcome5',
        },
      ],
    },
    {
      title: 'Auth Screen',
      data: [
        {
          image: require('../../assets/screenshots/login1.png'),
          screen: 'AuthLogin1',
        },
        {
          image: require('../../assets/screenshots/register1.png'),
          screen: 'AuthRegister1',
        },
      ]
    },
  ]);

  const navigate = (screen: any) => {
    navigation.navigate({ name: screen, key: screen });
  };

  const renderItem : React.FC<ItemProps> = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigate(item.screen)}
      style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
    </TouchableOpacity>
  );

  const renderSectionHeader : React.FC<HeaderProps> = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <SectionGrid
        itemDimension={wp('45%')}
        sections={items}
        style={styles.grid}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  grid: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    height: wp('50%'),
    backgroundColor: '#34495e',
  },
  itemImage: {
    resizeMode: 'contain',
    width: '100%',
    height: wp('45%'),
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#34495e',
    color: 'white',
    padding: 10,
  },
});

export default TableOfContents;