import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  return <>
    <Text style={style.textStyle}>Components Screen</Text>
  </>
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;