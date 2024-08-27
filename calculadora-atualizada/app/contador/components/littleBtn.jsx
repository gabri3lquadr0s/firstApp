import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';

const LittleBtn = (props) => {
    return(
        <View style={style.main2}>
            <Pressable style={style.lbtn1} onPress={props.press1}><Text style={style.txt2}>{props.btn1}</Text></Pressable>
            <Pressable style={style.lbtn2} onPress={props.press2}><Text style={style.txt2}>{props.btn2}</Text></Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    main2: {
        
        flex: 1,
        flexDirection: "row",
    },
    txt2: {
        color: "#fff",
        fontSize: 15
    },
    lbtn1: {
        margin: 10,
        width: 120,
        height: 30,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    lbtn2: {
        margin: 10,
        width: 120,
        height: 30,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default LittleBtn