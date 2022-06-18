import React, { useState } from 'react';
/* import type {Node} from 'react'; */
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';

const App /*: () => Node */ = () => {
  const [name, setName] = useState("Nieznajomy")
  const [counter, setCounter] = useState({ name: "Licznik 1", value: 0 })
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonClick = () => {
    setButtonClicked(true)
    Linking.openURL('https://teb.pl')
  }

  const changeNameState = () => {
    setName("Paweł")
  }

  const incrementCounter = () => {
    /* Zadanie zaliczeniowe 1 : zmodyfikuj funkcję tak, żeby po każdym
      kliknięciu wartość licznika wzrasała o 1 */
    setCounter({ name: "Licznik 1", value: 1 })
  }

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Cześć {name}</Text>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          title="Kliknij mnie!"
          onPress={buttonClick}
        ></Button>
      </View>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          title="Zmień stan"
          onPress={changeNameState}
        ></Button>
      </View>
      <Text style={styles.text}>{counter.name}: {counter.value}</Text>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          title="Zwiększ licznik"
          onPress={incrementCounter}
        ></Button>
      </View>
      <Text style={styles.text}>
        {buttonClicked ? "Guzik został wcisnięty" : "Guzik nie został wciśnięty"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#b3d4fc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#387094',
    color: '#ffffff',
    width: '80%',
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },
  buttonView: {
    margin: 10,
  },
});

export default App;
