import { View, Text, SafeAreaView, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, Modal, Switch, TextInput } from 'react-native-web'

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

const [text, setText] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="default" />
    {/* <StatusBar barStyle="dark-content" /> */}
    
    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 50 }}>Hello World</Text>
    
    <Image style={{ width: 100, height: 50}} source={require("./assets/icon.png")}/>

    {/* <Button title="Open Modal" onPress={() => setModal(true)} />
    <Modal visible={modal} animationType="slide" transparent={false}>
      <View>
        <Text>This is a modal</Text>
        <Button title="Close Modal" onPress={() => setModal(false)} />
      </View>
    </Modal> */}

    <TextInput 
    placeholder="Write here..." 
    style={{ borderWidth: 2, borderColor: "red", width: "100%", padding: 10}}
    value={text}
    onChangeText={setText}
    />

    <Text>{text}</Text>


  </SafeAreaView>
  )
}

export default App