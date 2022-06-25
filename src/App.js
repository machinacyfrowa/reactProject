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
  Pressable,
  Alert,
  ToastAndroid,
  Image,
  ImageBackground,
} from 'react-native';
import { VERTICAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import Header from './HeaderLogo';
import MyButton from './MyButton';


const App /*: () => Node */ = () => {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setLoggedIn] = useState(false)

  const onLogin = () => {
    if (login.length > 0) {
      if (password.length > 0) {
        setLoggedIn(true)
      } else {
        Alert.alert("Uwaga", "Pole login nie może być puste",
          [
            { text: "OK", onPress: () => console.log("Naciśnięto OK") },
            { text: "Rozumiem" },
            { text: "Spadaj" }
          ])
      }

    } else {

      ToastAndroid.showWithGravity("Pole login nie może być puste",
        ToastAndroid.LONG,
        ToastAndroid.TOP)
    }

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
          <Header />
          <Text style={styles.label}>
            Jesteś zalogowany
          </Text>

          {/* <Pressable
            onPress={onLogout}
            onLongPress={onLongPress}
            style={({ pressed }) => [styles.button, { backgroundColor: pressed ? '#fff' : '#eee' }]}
            hitSlop={10}
          >
            <Text style={styles.buttonText}>Wyloguj</Text>
          </Pressable> */}
          <MyButton
            color={'#f00'}
            onPressFunction={onLogout}
            buttonText={"Wyloguj"}
          />

        </View>
        :
        //nie jesteśmy zalogowani

        <ImageBackground
          style={styles.loginForm}
          resizeMode='cover'
          source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-smart-tech-blue-phone-background-backgroundmobile-phonenew-erauniverseintelligentstereoscopicilluminatetechnologydynamicgridbackgroundadvertising-image_72371.jpg' }}
        >
          {/* <Image
            style={styles.image}
            source={require('./assets/teb-logo.png')}
          /> */}
          <Header />

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
          {/* <TouchableOpacity style={styles.button}
            onPress={onLogin}
          >
            <Text style={styles.buttonText}>Zaloguj</Text>
          </TouchableOpacity> */}
          <MyButton
            color={'#0f0'}
            onPressFunction={onLogin}
            buttonText={"Zaloguj"}
          />
          <Image
            style={styles.networkImage}
            source={{ uri: 'https://opengameart.org/sites/default/files/DarkHouseTiles_Example_0.png' }}
            resizeMode='contain'
          />

        </ImageBackground>


      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appMain: {
    backgroundColor: '#71A8CD',
    flex: 1,
  },
  loginForm: {
    flex: 1,
    alignItems: 'center',
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
    width: '80%',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
    margin: 20,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
  },
  image: {
    margin: 10,

  },
  networkImage: {
    width: '80%',
    height: 200
  }
});

export default App;
