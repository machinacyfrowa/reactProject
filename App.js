import React from 'react';
/* import type {Node} from 'react'; */
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';

const App /*: () => Node */ = () => {

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Witaj świecie!</Text>
      <Button 
        style={styles.button} 
        title="Kliknij mnie!"
        onPress={() => {Linking.openURL('https://teb.pl')}}
      ></Button>
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
  button: {
    
  },
});

export default App;
