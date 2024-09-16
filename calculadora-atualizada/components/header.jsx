import React from "react";
import {View, Text, StyleSheet, Image, SafeAreaView} from "react-native";
import {Link} from "expo-router";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Link href={props.link} style={styles.link}>
                <Image style={styles.image} source={require('../assets/arrow.png')} />
            </Link>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        backgroundColor: "blue",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        height: 150,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 100,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    link: {
        width: 50,
        height: 70,
    }
})

export default Header;