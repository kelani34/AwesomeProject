import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ColorBox from './ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      data={colors}
      style={styles.container}
      keyExtractor={(items, index) => index}
      renderItem={({ item }) => (
        <ColorBox
          color={item.hexCode}
          text={`${item.colorName} : ${item.hexCode}`}
        />
      )}
      ListHeaderComponent={<Text style={styles.header}>{paletteName}</Text>}
    />
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  flex: 1,
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  header: {
    textAlign: 'left',
    fontWeight: '800',
    width: '100%',
    margin: 2,
  },
});
