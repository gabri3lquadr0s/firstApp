import React from "react";
import {View, Text, Pressable, StyleSheet} from 'react-native';

const ButtonLine = (props) => {
    return(
        <View style={styles.view}>
            <Pressable onPress={props.press1} style={props.style1}><Text style={styles.text}>{props.first}</Text></Pressable>
            <Pressable onPress={props.press2} style={props.style2}><Text style={styles.text}>{props.second}</Text></Pressable>
            <Pressable onPress={props.press3} style={props.style3}><Text style={styles.text}>{props.third}</Text></Pressable>
            <Pressable onPress={props.press4} style={props.style4}><Text style={styles.text}>{props.fourth}</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginBottom: 20
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
    }

})

export default ButtonLine;