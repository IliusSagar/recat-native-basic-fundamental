import { View, Text, SafeAreaView, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Switch } from 'react-native-web'

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
// RefreshController;
// ActivityIndicator;

const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="default" />
    {/* <StatusBar barStyle="dark-content" /> */}
    
    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 50 }}>Hello World</Text>
    <Image style={{ width: 100, height: 50}} source={require("./assets/icon.png")}/>

    <ImageBackground style={{height:150}} source={require("./assets/icon.png")}>
      <Text>hello world</Text>
    </ImageBackground>

    <Button 
    title="Click Me" 
    color="#000" 
    accessibilityLabel="Click me button for more info."
    onPress={() => console.log("clicked")}
    />

    <Pressable style={{ padding: 23, backgroundColor: "blue"}} onPress={() => console.log("click me")}>
      <Text style={{ color: "white"}}>Click Me</Text>
    </Pressable>

    <TouchableOpacity style={{ padding: 23, backgroundColor: "red"}} onPress={() => console.log("click me")}>
    <Text style={{ color: "white"}}>Click Me</Text>
    </TouchableOpacity>

    <Switch 
    trackColor={{ false: "#767577", true: "#81b0ff"}}
    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    value={isEnabled}
    onValueChange={toggleSwitch}
    />


  </SafeAreaView>
  )
}

export default App