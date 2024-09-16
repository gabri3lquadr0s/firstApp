import {Image, Text, View, StyleSheet} from "react-native";
import React from "react";

const Item = (props) => {
    return(
        <View style={styles.item}>
            <Image source={{ uri: props.url }} style={styles.img}/>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        padding: 20
    },
    img: {
        width: 300,
        height: 150
    },
    title: {
        fontSize: 20,
        fontWeight: "800"
    },
})

export default Item