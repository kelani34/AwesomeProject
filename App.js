import React from 'react';

import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header}>
            Here are some boxes of different colors
          </Text>
        </View>
        <View style={[styles.cyan, styles.box]}>
          <Text style={styles.text}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.text}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  flex: 1,
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  header: {
    textAlign: 'left',
    fontWeight: '800',
    width: '100%',
    margin: 2,
  },
  text: {
    color: 'white',
    fontWeight: 700,
  },

  box: {
    width: '100%',
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});
