import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Pressable,
} from 'react-native'
import MyButton from "./MyButton";

const HomeScreen = ({navigation}) => {

    const changeScreen = () => {
        navigation.navigate("MainScreen")
        // navigation.replace("Main")
    }

    return (
        <View style={styles.view}>
            <Text style={styles.text}>Ekran powitalny aplikacji!</Text>
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
    pressable: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10
    }
})
export default HomeScreen