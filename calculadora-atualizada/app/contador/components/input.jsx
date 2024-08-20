import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
    return(
        <View>
            <TextInput 
                style={style.input}
                onChangeText={props.onchange}
                placeholder="0,00"
                keyboardType="numeric"
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 400,
    }
})

export default Input