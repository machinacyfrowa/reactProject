import React, { useEffect } from "react";
import {
    Text,
    View,
} from 'react-native'
import MyButton from "./MyButton";

import Style from "./Style";

const MainScreen = ({navigation, route}) => {

    useEffect(
        () => {
            console.log(route)
        }
    )
    const firstName = route.params ? route.params.firstName : ""

    const goBack = () => {
        navigation.goBack()
        // navigation.replace("Home")
    }

    return (
        <View style={Style.view}>
            <Text style={Style.text}>Ekran główny aplikacji!</Text>
            <Text style={Style.textSmall}>Witaj {firstName}</Text>
            <MyButton
                onPressFunction={goBack}
                buttonText={"Wróć"}
                color={"#ccc"}
            />
            {/* <Pressable 
                onPress={goBack}
                style={styles.pressable}
                >
                <Text>Powrót</Text>
            </Pressable> */}
        </View>
        
    )
}

export default MainScreen