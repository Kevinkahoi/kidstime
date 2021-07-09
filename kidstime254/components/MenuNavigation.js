import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Constants from 'expo-constants';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

function product({ navigation }) {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '1%',
          paddingTop: Constants.statusBarHeight,
         
        }}>
        <AntDesign
          name="menufold"
          size={24}
          color="black"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Text> BEST EVER KIDS</Text>
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <View style={{ flex: 2 }}>
      <Text> Products</Text>
      
      </View>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Profile"/>
      <DrawerItem label="About"/>
      <DrawerItem label="Cart"/>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={product} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
