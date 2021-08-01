import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
    { name: "Friend", age: 23 },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend, i) => `${friend.name} ${i}`}
      data={friends}
      // renderItem={(element) => {
      // element === { item: { name: 'Friend 1'}, index: 0}
      // }
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.textStyle}>{`${item.name} ${index + 1} - Age ${
            item.age + index
          }`}</Text>
        );
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 40,
    marginHorizontal: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
});
