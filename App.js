import React from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  ScrollView, 
  ActivityIndicator, 
  StatusBar, 
  StyleSheet 
} from 'react-native';

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
      <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 50 }}>
        Hello World
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, marginVertical: 20 }}
      >
        {DATA.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ScrollView>

      <ActivityIndicator size="large" color="black" />
    </SafeAreaView>
  );
};

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 200, // Adjust the width for horizontal scroll
    height: 150, // Adjust the height
    padding: 20,
    backgroundColor: "blue",
    marginHorizontal: 10, // Add spacing between items
    borderRadius: 10, // Optional: rounded corners
    justifyContent: "center", // Center the text
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
