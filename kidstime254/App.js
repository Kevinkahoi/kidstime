import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductSection from './components/ProductSection';
import CartSection from './components/CartSection';
import { Card } from 'react-native-paper';


const Stack = createStackNavigator();

function App() {
  return (
    <ProductSection/>
  );
}

export default App;
