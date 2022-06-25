import React from "react";
import {
    Pressable,
    Text,
    StyleSheet
} from 'react-native'

const MyButton = (props) => {
    return(
        <Pressable
            onPress={props.onPressFunction}
            
            style={({ pressed }) => [styles.button, { backgroundColor: pressed ? '#fff' : props.color }]}
            hitSlop={10}
          >
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",

        padding: 10,
        margin: 20,
        borderRadius: 5,
        
      },
      buttonText: {
        fontSize: 16,
      },
})
export default MyButton