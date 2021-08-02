import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const tiles = [
    { imageUrl: "https://www.fillmurray.com/300/300", name: "Bill Murray 1" },
    { imageUrl: "https://www.fillmurray.com/301/301", name: "Bill Murray 2" },
    { imageUrl: "https://www.fillmurray.com/302/302", name: "Bill Murray 3" },
    { imageUrl: "https://www.fillmurray.com/303/303", name: "Bill Murray 4" },
    { imageUrl: "https://www.fillmurray.com/304/304", name: "Bill Murray 5" },
    { imageUrl: "https://www.fillmurray.com/305/305", name: "Bill Murray 6" },
    { imageUrl: "https://www.fillmurray.com/306/306", name: "Bill Murray 7" },
    { imageUrl: "https://www.fillmurray.com/307/307", name: "Bill Murray 8" },
    { imageUrl: "https://www.fillmurray.com/308/308", name: "Bill Murray 9" },
    { imageUrl: "https://www.fillmurray.com/309/309", name: "Bill Murray 10" },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(tile) => tile.name}
      data={tiles}
      renderItem={({ item, index }) => {
        return <ImageDetail tileDetails={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  image: {
    height: 300,
    width: 300,
  },
});

export default ImageScreen;
