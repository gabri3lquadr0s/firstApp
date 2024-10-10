import React, {useState, useRef, useEffect, memo} from "react";
import {View, StyleSheet, Text, Image, Button, FlatList, Linking, Pressable} from "react-native";
import Header from "../../components/header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Link} from "expo-router";

const Memories = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const memories = await AsyncStorage.getItem('memories');
            setData(memories != null ? JSON.parse(memories) : []);
        } fetchData()
    }, [])

    return(
        <View style={styles.container}>
            <Header link=".." title="Minhas memórias" />
            <Link href="./add-memory" style={styles.links}>
                <Text style={styles.linkText}>Adicionar memória</Text>
            </Link>
            <View style={styles.container}>
                <FlatList data={data} renderItem={({item}) => (
                    <View style={styles.item}>
                        {item.image === null ? (
                            <Image source={require('../../assets/placeholder.jpg')} style={styles.image}/>
                        ) : (
                            <Image source={{uri: item.image}} style={styles.image}/>
                        )}
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.about}>{item.about}</Text>
                        <Text>{item.where}, em {item.year}</Text>
                    </View>
                )} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
    },
    item: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignSelf: "center",
    },
    links: {
        backgroundColor: "blue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    linkText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333333",
        marginBottom: 5,
    },
    about: {
        fontSize: 16,
        color: "#555555",
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        color: "#888888",
    }
})

export default Memories