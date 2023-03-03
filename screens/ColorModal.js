import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { data } from '../constants/data';

const ColorModal = ({ navigation, route }) => {
  const { updateColor } = route.params;
  const [paletteName, setPaletteName] = useState('');
  const [isEnabled, setIsEnabled] = useState(
    new Array(data.length).fill(false),
  );

  const handleSubmit = () => {
    const colors = data.filter((_, index) => isEnabled[index]);
    if (!paletteName) {
      return Alert.alert('Color Name', ' Please enter a color name');
    } else if (colors.length < 3) {
      return Alert.alert(
        'Color Name should be more than 3',
        ' Please select atleast 3 colors',
      );
    }
    const newColor = {
      paletteName: paletteName,
      colors: colors,
    };
    updateColor(newColor);
    navigation.goBack();
  };

  const toggleSwitch = (index) => {
    const newIsEnabled = [...isEnabled];
    newIsEnabled[index] = !isEnabled[index];
    setIsEnabled(newIsEnabled);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>ColorModal</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPaletteName}
          value={paletteName}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <View style={styles.switch}>
            <Text>{item.colorName}</Text>
            <Switch
              trackColor={{ false: '#93a1a1', true: '#00FF00' }}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#93a1a1"
              onValueChange={() => toggleSwitch(index)}
              value={isEnabled[index]}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorModal;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#93a1a1',
    borderRadius: 4,
    fontSize: 18,
    padding: 10,
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderBottomColor: '#93a1a1',
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A0B0',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
