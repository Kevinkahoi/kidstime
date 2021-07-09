import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Alert,
  Image,
  Button,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { FlatGrid } from 'react-native-super-grid';
import { useWindowDimensions } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';



export default function ProductSection() {
  const [cartItem, setCartItem] = useState([]);
  const [DATA] = useState([
    {
      _id: 'prewalker2',
      title: 'Athletic kids shoes',
      image: require('../assets/images/1.jpg'),
      description: 'Very affordable,lightweight warm inside',
      price: 350,
      availableSizes: ['m', 's'],
    },
    {
      _id: 'prewalker3',
      title: 'Kids leather shoes',
      image: require('../assets/images/2.jpg'),
      description: 'Strong leather shoes for kids.',
      price: 300,
      availableSizes: ['xxl', 'xs'],
    },
    {
      _id: 'prewalker4',
      title: 'Kids prewalker',
      image: require('../assets/images/4.jpg'),
      description: 'Kids baby shoes..lightweight and stylish',
      price: 400,
      availableSizes: ['h', 'l'],
    },
    {
      _id: 'prewalker5',
      title: 'Papa and Mama prewalker',
      image: require('../assets/images/5.jpg'),
      description: 'Custom stylish prewalker for kids below 2years',
      price: 350,
      availableSizes: ['xl', 'xxl'],
    },

    {
      _id: 'prewalker5',
      title: 'Papa and Mama prewalker',
      image: require('../assets/images/7.jpg'),
      description: 'Custom stylish prewalker for kids below 2years',
      price: 350,
      availableSizes: ['xl', 'xxl'],
    },

    {
      _id: 'prewalker5',
      title: 'Papa and Mama prewalker',
      image: require('../assets/images/6.jpg'),
      description: 'Custom stylish prewalker for kids below 2years',
      price: 350,
      availableSizes: ['xl', 'xxl'],
    },
  ]);
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  const numColumn = 2;

  const addToCart = (item) => {
    console.log('we are in');
    setCartItem([...cartItem, item]);
  };

  const onPress = () => setCartItem((prevItem) => prevItem + 1);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
     <TouchableOpacity onPress={onPress} style={styles.roundButton}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            paddingBottom: 6,
            justifyContent: 'center',
            alignItem: 'center',
          }}>
          +
        </Text>
      </TouchableOpacity>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.container}> {item.title.toUpperCase()}</Text>
      <Text style={styles.container}> {item.price}</Text>
   
     
    </View>
  );

  return (
    <View style={{flex:1, marginTop: StatusBar.currentHeight || 0 }}>
      <View style={styles.navbar}>
        <Text style={{fontSize:"100%",fontWeight:"bold",fontFamily:"cantika",padding:"2%", color:"white"}}>KIDS TIME </Text>
        
        <Text  style={{fontSize:"100%",fontWeight:"bold",fontFamily:"cantika",padding:"2%", color:"white",justifyContent:"space-between",alignItem:"center"}}>   <AntDesign name="shoppingcart" size={24} color="white" onPress={() => {
          alert("you tapped me")
        }}/>
          ({cartItem.length})
        </Text>
      </View>


      <View style={styles.update} >
       <Image  source={require('../assets/images/5.jpg')} style={{ 
 resizeMode: 'cover',
    width:"100%",
    height:300


 }}/> 
      </View>

     



      <View style={styles.container}>
    

            <FlatGrid
          style={styles.container}
          itemDimension={130}
          data={DATA}
          spacing={12}
          renderItem={renderItem}
        />

      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    flex:1,
    flexDirection: 'row',
   backgroundColor:"rgb(197, 39, 54)",
    justifyContent: 'space-between',
   
    fontWeight: 'bold',
    height:5    
  },
  container: {
    flex: 1,
    marginTop: '2%',
    alignItem: 'center',
   
    justifyContent: 'center',
    paddingLeft: 2,
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
    paddingTop: 50,
    marginTop: 2,
     alignSelf: 'stretch'
  },

  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
    backgroundColor: '',
    padding: 8,
    borderRadius: 3,
    shadowColor: "rgb(197, 39, 54)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 0,
  },
  roundButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:"70%",
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'purple',
  },
 update: {
    flex:2,
    height:400,
    aspectRatio: 1 * 1.4,
   
   
  },


});
