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
  const [age, setAge] = useState(null)
  const [bio, setBio] = useState(null)

  const saveInfo = () => {
    //TODO: sprawdzić jak zaczytać dane z textinput bez stanu
  }

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
        // maxLength={16}
        // secureTextEntry={true}
      />
      <Text style={styles.label}>
        Twoje imię to: {name}
      </Text>
      <Text style={styles.label}>
        Ile masz lat:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='np. 18'
        placeholderTextColor={'#eee'}
        keyboardType='number-pad'
        onChangeText={(value) => setAge(value)}
      />
      <Text style={styles.label}>
        Napisz coś o sobie:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='np. Czym się zajmujesz'
        placeholderTextColor={'#eee'}
        multiline
        onChangeText={(value) => setBio(value)}
      />
      <Button
        title="Zapisz"
        onPress={saveInfo}
      ></Button>
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
