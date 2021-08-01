import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myName = "David";
  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      <Text style={styles.subheaderStyle}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
    color: "blue",
  },
  subheaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
