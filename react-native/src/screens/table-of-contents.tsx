import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

interface ItemProps {
  item: {
    screen: String;
    image: any;
    name: String;
    desc: String;
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
          name: 'Basic Intro',
          desc: 'Intro with text and image',
          image: require('../../assets/screenshots/welcome1.png'),
          screen: 'Welcome1',
        },
        {
          name: 'Auth Slide',
          desc: 'Intro with SignIn and SignUp',
          image: require('../../assets/screenshots/welcome2.png'),
          screen: 'Welcome2',
        },
        {
          name: 'Welcome',
          desc: 'Welcome with SignIn and SignUp',
          image: require('../../assets/screenshots/welcome3.png'),
          screen: 'Welcome3',
        },
      ],
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
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDesc}>{item.desc}</Text>
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
        style={styles.gridView}
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
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    height: wp('65%'),
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
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemDesc: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
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