import { View, Text, SafeAreaView, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, Button, FlatList, Modal, ScrollView, Switch, TextInput } from 'react-native-web'

// Text, View;
// StatusBar;
// Image;
// ImageBackground;
// Button;
// Pressable;
// TouchableOpacity;
// Switch;
// Modal;
// TextInput;
// FlatList;
// ScrollView;
// ActivityIndicator;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const App = () => {



  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="default" />

    
    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 50 }}>Hello World</Text>
   
    {/* <FlatList 
    data={DATA} 
    renderItem={({ item }) => <Item item={ item}/>} keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      gap: 10,
      marginTop: 30,
    }}
    /> */}

    <ScrollView 
    showHorizontalScrollIndicator={false}
    horizontal={true} 
    style={{ flex: 1}}>
      {DATA.map((item) => (
        <Item item={item} key={item.id}/>
      ))}
    </ScrollView>

    <ActivityIndicator size="large" color="black"/>
    

  </SafeAreaView>
  )
}

export default App

const Item = ({ item }) => {
  return(
    <View style={{ 
      width: 300, 
      height: 300, 
      padding: 20, 
      backgroundColor: "blue", 
      marginHorizontal: 10
      }}>
      <Text style={{ color: "white"}}>{item.title}</Text>
    </View>
  )
}