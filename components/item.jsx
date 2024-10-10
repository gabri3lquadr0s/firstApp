import {Image, Text, View, StyleSheet} from "react-native";
import React from "react";
import {Link} from "expo-router";

const Item = (props) => {
    return(
        <View style={styles.item}>
            <Link
                href={{
                    'pathname': `aboutme/details/${props.id}`,
                    'params': {'data': JSON.stringify(props.data)}
                }}
            >
                <Image source={{ uri: props.url }} style={styles.img}/>
            </Link>
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