import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
} from 'react-native'
import MyButton from "./MyButton";

import Style from "./Style";

const HomeScreen = ({navigation}) => {

    const [name, setName] = useState("")

    const changeScreen = () => {
        navigation.navigate("MainScreen", {firstName: name})
        // navigation.replace("Main")
    }

    return (
        <View style={Style.view}>
            <Text style={Style.text}>Ekran powitalny aplikacji!</Text>
            <Text style={Style.textSmall}>Podaj swoje imię:</Text>
            <TextInput
                style={Style.textInput}
                onChangeText={setName}
            />
            <MyButton 
                onPressFunction={changeScreen}
                buttonText={"Przejdź do drugiego ekranu"}
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