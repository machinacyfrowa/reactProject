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
      <View style={{ flexDirection: 'row' }}>
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
      <View style={styles.flexDemoContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.flexDemoColumn}>1</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.flexDemoColumn}>2</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.flexDemoColumn}>3</Text>
        </View>
      </View>
      <View style={styles.flexDemoContainer2}>
        <View style={{ flex: 1 }}>
          <Text style={styles.flexDemoRow}>1</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.flexDemoRow}>2</Text>
        </View>
        <View style={{ flex: 3 }}>
          <Text style={styles.flexDemoRow}>3</Text>
        </View>
      </View>
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
  flexDemoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  flexDemoContainer2: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
  },
  flexDemoColumn: {
    backgroundColor: '#387094',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 5,
  },
  flexDemoRow: {
    backgroundColor: '#387094',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    margin: 5,
  },
  buttonView: {
    margin: 10,
  },
});

export default App;
