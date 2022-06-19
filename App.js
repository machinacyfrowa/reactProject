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
  TouchableOpacity,
  Pressable
} from 'react-native';
import { VERTICAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';

const App /*: () => Node */ = () => {

  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoggedIn, setLoggedIn] = useState(false)

  const onLogin = () => {
    setLoggedIn(true)
  }

  const onLogout = () => {
    setLoggedIn(false)
  }

  const onLongPress = () => {
    console.log("Długie naciśnięcie guzika")
  }

  return (
    <SafeAreaView style={styles.appMain}>
      {isLoggedIn ?
        // jestesmy zalogowani
        // <Button
        //   title='Wyloguj'
        //   onPress={onLogout}
        // />
        <View>
          <Text style={styles.label}>
            Jesteś zalogowany
          </Text>
          {/* <TouchableOpacity style={styles.button}
            onPress={onLogout}
          > */}
          <Pressable
            onPress={onLogout}
            onLongPress={onLongPress}
            style={(pressed) => [{backgroundColor: pressed ? '#000' : "eee"}, styles.button]}
            hitSlop={10}
          >
            <Text style={styles.buttonText}>Wyloguj</Text>
          </Pressable>

          {/* </TouchableOpacity> */}
        </View>
        :
        //nie jesteśmy zalogowani
        <View>
          <Text style={styles.label}>Login:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setLogin(value)}
          />
          <Text style={styles.label}>Hasło:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
          />
          {/* <Button
            title='Zaloguj'
            onPress={onLogin}
          /> */}
          <TouchableOpacity style={styles.button}
            onPress={onLogin}
          >
            <Text style={styles.buttonText}>Zaloguj</Text>
          </TouchableOpacity>
        </View>
      }
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
  button: {
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
    margin: 20,
    borderRadius: 5,

  },
  buttonText: {
    fontSize: 16,
  },
});

export default App;
