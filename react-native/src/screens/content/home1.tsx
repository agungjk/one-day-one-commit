import React, { useEffect, Fragment } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { IconButton, Title, Avatar, Divider } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const data = [...Array(5).keys()];

const Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: '@Username',
    })
  }, []);

  const renderItem = (item: any, index : any) => (
    <Fragment key={index}>
      <View style={styles.post}>
        <Avatar.Image
          size={wp('13%')}
          style={styles.postProfile}
          source={require('../../../assets/no-image.png')}
        />
        <View style={styles.postInfo}>
          <Title style={styles.postName}>User {index + 1}</Title>
          <Text style={styles.postDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. 
          </Text>
          <Image
            style={styles.postImg}
            source={require('../../../assets/no-image.png')}
          />
        </View>
      </View>
      <Divider />
    </Fragment>
  );

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.profile}>
        <View style={styles.info}>
          <Title style={styles.name}>Full Name</Title>
          <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id ligula ante. 
          </Text>
        </View>
        <Avatar.Image
          size={wp('20%')}
          style={styles.profileImg}
          source={require('../../../assets/no-image.png')}
        />
      </View>
      <Divider />
      <View style={styles.menu}>
        <Title style={styles.menuText}>Files</Title>
        <IconButton size={23} icon="file" />
      </View>
      <Divider />
      <View style={styles.menu}>
        <Title style={styles.menuText}>Favorites</Title>
        <IconButton size={23} icon="star" />
      </View>
      <Divider />
      {data.map(renderItem)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: wp('10%'),
  },
  info: {
    flex: 1,
  },
  profileImg: {
    backgroundColor: '#efefef',
  },
  name: {
    fontSize: wp('8%'),
    lineHeight: wp('8%'),
  },
  desc: {
    color: 'grey',
    lineHeight: 20,
  },
  menu: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: 'grey',
    paddingTop: 7,
  },
  post: {
    flexDirection: 'row',
    padding: 15,
  },
  postProfile: {
    backgroundColor: '#efefef',
  },
  postImg: {
    marginTop: 15,
    backgroundColor: '#efefef',
    width: wp('100%') - 110,
    height: wp('60%'),
  },
  postInfo: {
    flex: 1,
    paddingLeft: 15,
  },
  postName: {
    fontSize: 16,
  },
  postDesc: {
    color: 'grey',
    lineHeight: 20,
  },
});

export default Screen;
