import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
const ColorPreview = ({ color }) => {
  return (
    <>
      <Text style={style.text}>{color.name}</Text>
      <FlatList
        data={color.color.slice(0, 5)}
        keyExtractor={({ items }) => items}
        renderItem={({ item }) => (
          <View style={[style.box, { backgroundColor: item.hexCode }]} />
        )}
        horizontal={true}
      />
    </>
  );
};

export default ColorPreview;

const style = StyleSheet.create({
  container: {
    margin: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  box: {
    height: 40,
    width: 40,
    backgroundColor: 'blue',
    marginRight: 10,
    marginBottom: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
  },
});
