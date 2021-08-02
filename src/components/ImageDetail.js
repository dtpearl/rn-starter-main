import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  const { tileDetails } = props;
  return (
    <View>
      <Image
        source={{ uri: tileDetails.imageUrl }}
        accessibilityLabel={tileDetails.name}
        style={styles.image}
      />
      <Text style={styles.text}>{tileDetails.name}</Text>
    </View>
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

export default ImageDetail;
