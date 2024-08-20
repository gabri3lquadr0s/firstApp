import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Buttons = (props) => {
    return(
        <View style={style.main}>
            <Pressable style={style.btn} onPress={props.press1}><Text style={style.txt}>{props.btn1}</Text></Pressable>
            <Pressable style={style.btn} onPress={props.press2}><Text style={style.txt}>{props.btn2}</Text></Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column",
        gap: 20,
    },
    txt: {
        color: "#fff",
        fontSize: 20
    },
    btn: {
        width: 400,
        height: 40,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Buttons