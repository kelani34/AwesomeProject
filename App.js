import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPallete from './components/ColorPallete';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPallete"
          component={ColorPallete}
          options={({ route }) => ({ title: route.params.palleteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
