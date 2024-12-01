import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

// Text, View;
// StatusBar;
// Image;
// ImageBackground;
// Button;
// Pressable;
// Pressable Opacity;
// Switch;
// Modal;
// TextInput;
// FlatList;
// ScrollView;
// RefreshController;
// ActivityIndicator;

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="default" />
    {/* <StatusBar barStyle="dark-content" /> */}
    
    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 50 }}>Hello World</Text>
    <Image style={{ width: 100, height: 50}} source={require("./assets/icon.png")}/>

    <ImageBackground style={{height:150}} source={require("./assets/icon.png")}>
      <Text>hello world</Text>
    </ImageBackground>


  </SafeAreaView>
  )
}

export default App