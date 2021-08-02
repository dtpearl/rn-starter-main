import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  const { navigation } = props;
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Components Screen"
        onPress={() => {
          console.log("Pressed go to components screen");
          navigation.navigate("Components");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("Pressed Go to list button");
          navigation.navigate("List");
        }}
      >
        <Text>Go to List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
