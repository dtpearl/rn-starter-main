import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  const { navigation } = props;
  return (
    <View>
      <Text style={styles.headerText}>Home Screen</Text>
      <Button
        title="Go to Components Screen"
        onPress={() => {
          console.log("Pressed go to components screen");
          navigation.navigate("Components");
        }}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to Components Images"
        onPress={() => {
          console.log("Pressed go to images screen");
          navigation.navigate("Images");
        }}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to List Screen"
        onPress={() => {
          console.log("Pressed go to List screen");
          navigation.navigate("List");
        }}
        style={styles.buttonStyle}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("Pressed Go to images button");
          navigation.navigate("Images");
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.text}>Go to Images Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: "#000",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  buttonStyle: {
    margin: 20,
    padding: 20,
    color: "white",
    backgroundColor: "blue",
  },
});

export default HomeScreen;
