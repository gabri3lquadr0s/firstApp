import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, TextInput, SafeAreaView, Button} from 'react-native';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [res, setRes] = useState(null)

  function op(op) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    let c;
    switch(op) {
      case '+':
        c=a+b;
        break;
      case '-':
        c=a-b;
        break;
      case '*':
        c=a*b;
        break;
      case '/':
        c=a/b;
        break;
      case '**':
        c=a**b;
        break;
    }
    if(isNaN(c)) setRes('Type only numbers in input');
    else setRes(c);
  }

  return(
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <SafeAreaView>
        <TextInput 
          style={styles.input}
          onChangeText={setNum1}
          value={num1}
          keyboardType="numeric"
          
        />
        <TextInput 
          style={styles.input}
          onChangeText={setNum2}
          value={num2}
          keyboardType="numeric"
        />
      </SafeAreaView>
      <View style={styles.div}>
        <Button
          onPress={() => op('+')}
          title="+"
          color="#000000"
        />
        <Button
          onPress={() => op('-')}
          title="-"
          color="#000000"
        />
        <Button
          onPress={() => op('*')}
          title="*"
          color="#000000"
        />
        <Button
          onPress={() => op('/')}
          title="/"
          color="#000000"
        />
        <Button
          onPress={() => op('**')}
          title="**"
          color="#000000"
        />
      </View>
      <Text>{res}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: '10px',
  }
})

export default App;