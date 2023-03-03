import React, { useCallback, useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ColorPreview from './ColorPreview';

const Home = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  const handleColors = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const palettes = await result.json();
      setColors(palettes);
    }
  }, []);

  useEffect(() => {
    handleColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ColorPallete', {
                  paletteName: item.paletteName,
                  colors: item.colors,
                });
              }}
            >
              <ColorPreview color={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

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
  },
});
