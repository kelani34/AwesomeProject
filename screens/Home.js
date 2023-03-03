import React, { useCallback, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  RefreshControl,
  Text,
} from 'react-native';
import ColorPreview from './ColorPreview';

const Home = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const handleLoading = useCallback(async () => {
    setLoading(true);
    await handleColors();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addColor(newColor) {
    setColors([newColor, ...colors]);
  }

  return (
    <>
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
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={handleLoading} />
          }
          ListHeaderComponent={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ColorModal', {
                  modalName: 'Add a color scheme',
                  updateColor: addColor,
                });
              }}
            >
              <View style={style.modal}>
                <Text style={style.modalText}>Add a color scheme</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    </>
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
  modal: {
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#69D2E7',
  },
});
