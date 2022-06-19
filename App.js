import React, { useState } from 'react';
/* import type {Node} from 'react'; */
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';

const App /*: () => Node */ = () => {

  const [name, setName] = useState('')

  return (
    <SafeAreaView style={styles.appMain}>
      <Text style={styles.label}>
        Podaj swoje imię:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='np. Paweł'
        placeholderTextColor={'#eee'}
        onChangeText={(value => setName(value))}
      />
      <Text style={styles.label}>
        Twoje imię to: {name}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appMain: {
    backgroundColor: '#71A8CD',
    flex: 1,
  },
  label: {
    textAlign: 'center',
    margin: 20,
    color: '#eee',
    fontSize: 20,
  },
  input: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eee',
    textAlign: 'center',
    fontSize: 16,
    color: '#eee',
    
  },
});

export default App;
