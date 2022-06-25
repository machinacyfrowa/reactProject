import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Pressable,
} from 'react-native'
import MyButton from "./MyButton";

const MainScreen = ({navigation}) => {

    const goBack = () => {
        navigation.goBack()
        // navigation.replace("Home")
    }

    return (
        <View style={styles.view}>
            <Text style={styles.text}>Ekran główny aplikacji!</Text>
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

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        textAlign: "center",
        fontSize: 32,
    },
})
export default MainScreen