import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    TextInput,
} from 'react-native'
import MyButton from "./MyButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from "./Style";

const HomeScreen = ({ navigation }) => {

     useEffect(() => {
        
         getName()
         console.log('Name:' + name) 
    },[])

    const [name, setName] = useState("")

    const changeScreen = () => {
        saveName()
        navigation.navigate("MainScreen", { firstName: name })
        // navigation.replace("Main")
    }

    const getName = async () => {
        try {
            const value = await AsyncStorage.getItem('name')
            if (value !== null) {
                setName(value)
            }
        } catch (e) {
            console.log("Błąd odczytu z pamięci: " + e)
        }
    }

    const saveName = async () => {
        try {
            await AsyncStorage.setItem('name', name)
        } catch (error) {
            console.log("Błąd zapisu do pamięci: " + error)
        }

    }
    const reset = async () => {
        try {
            setName("")
            await AsyncStorage.removeItem('name')
        } catch (error) {
            console.log("Błąd czyszczenia pamięci: " + error)
        }
    }

    return (
        <View style={Style.view}>
            <Text style={Style.text}>Ekran powitalny aplikacji!</Text>
            <Text style={Style.textSmall}>Podaj swoje imię:</Text>
            <TextInput
                style={Style.textInput}
                onChangeText={setName}
                value={name}
            />
            <MyButton
                onPressFunction={changeScreen}
                buttonText={"Przejdź do drugiego ekranu"}
                color={'#ccc'}
            />
            <MyButton
                onPressFunction={reset}
                buttonText={"Wyczyść pamięć"}
                color={'#ccc'}
            />
            {/* <Pressable 
                onPress={changeScreen}
                style={styles.pressable}
                >
                <Text>Przejdź do drugiego ekranu</Text>
            </Pressable> */}
        </View>

    )
}


export default HomeScreen