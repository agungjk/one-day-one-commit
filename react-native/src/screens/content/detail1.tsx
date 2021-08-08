import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Product One',
    })
  }, []);

  return (
    <View style={styles.screen}>
      <Image
        style={styles.img}
        source={require('../../../assets/no-image.png')}
      />
      <View style={styles.content}>
        <Title style={styles.title}>Product One</Title>
        <Text style={styles.price}>
          $ 125
        </Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus augue gravida nibh semper tempus. Fusce ut rutrum erat, ut elementum mi. Etiam at posuere sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam tristique pulvinar velit quis auctor. Quisque elit nunc, viverra eget ornare nec, dapibus vitae odio. Nunc convallis dolor ut accumsan ullamcorper. Vestibulum at lobortis diam.

          Phasellus aliquet turpis vel ligula luctus, sed dapibus ligula rhoncus. Maecenas et elit aliquet, pharetra dolor non, feugiat erat. Sed sollicitudin laoreet accumsan. Proin eget dolor sit amet tortor venenatis elementum. Nunc at bibendum odio. Curabitur maximus venenatis urna nec posuere. Vestibulum efficitur, quam non venenatis dapibus, risus urna posuere mauris, et hendrerit mi nisi sit amet sapien. Suspendisse a elit dolor. Ut ut quam nunc. Aliquam vitae orci facilisis, porttitor erat sit amet, porta est. Phasellus aliquam efficitur cursus. Cras ipsum est, euismod vel turpis nec, porta sollicitudin lacus. Morbi eu bibendum elit, aliquet tempor dui.

          Sed sed orci ex. Nulla ac sapien vitae enim sollicitudin semper nec et augue. Etiam pretium ac purus ac consequat. Phasellus eget rutrum nibh. Nam velit turpis, molestie a sodales sed, auctor eu metus. Nullam at urna sit amet enim pulvinar luctus eu id lectus. Aliquam rhoncus id sapien et hendrerit. Cras id urna id tellus tincidunt venenatis sit amet a arcu. In iaculis viverra felis, vitae interdum ipsum. Aliquam ut ante fermentum, semper mi eu, condimentum est. Maecenas volutpat neque quis bibendum pharetra. Nam vitae dictum dolor. Vestibulum sollicitudin justo in tristique fermentum. Vivamus sit amet nunc risus. Donec faucibus sed massa a scelerisque.

          Donec elit augue, dapibus quis mattis non, congue semper elit. Curabitur ut lorem nec odio ultricies elementum. Sed porta ante id purus laoreet, vitae vulputate nisl cursus. Nulla volutpat tempor libero, at placerat erat. Duis sodales libero tempus, malesuada mi sit amet, consectetur velit. Duis dui nunc, sodales vel elementum non, varius id leo. In at vestibulum metus. Mauris egestas risus sed leo posuere dapibus. Suspendisse potenti. Pellentesque euismod at dui ut ultrices. Sed bibendum auctor augue, ac cursus magna vestibulum a. Mauris blandit odio odio, accumsan rutrum turpis malesuada quis. Nulla vel lacinia lorem. Sed hendrerit at diam at commodo. Vestibulum consectetur purus at felis malesuada faucibus.

          Praesent ut purus maximus, fermentum dolor sit amet, rutrum metus. Vivamus sagittis non ante ac vehicula. Curabitur nunc turpis, gravida sed sodales id, accumsan sit amet urna. Sed urna lorem, sodales a rutrum ut, eleifend ut diam. Cras nec odio est. Proin sed faucibus nisl. Donec semper pellentesque elementum. Morbi molestie, leo et porta facilisis, erat orci scelerisque nisi, ut pharetra justo tellus eu est. Curabitur tincidunt blandit metus non commodo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#efefef',
    flex: 1,
    flexGrow: 2,
  },
  content: {
    flex: 1,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#fff',    
  },
  img: {
    backgroundColor: '#efefef',
    width: '100%',
    height: wp('60%'),
  },
  title: {
    paddingTop: 5,
    fontSize: 16,
  },
  price: {
    color: 'grey',
    lineHeight: 20,
  },
  desc: {
    paddingTop: 10,
    lineHeight: 20,
    textAlign: 'justify',
  },
});

export default Screen;
