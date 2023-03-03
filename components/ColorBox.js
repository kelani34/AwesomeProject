/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ color, text, textColor }) => {
  return (
    <View style={[{ backgroundColor: color }, styles.box]}>
      <Text
        style={[
          {
            color:
              parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1
                ? '#000'
                : '#fff',
          },
          styles.text,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  text: {
    // color: 'white',
    fontWeight: 700,
  },
  box: {
    padding: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
  },
});
