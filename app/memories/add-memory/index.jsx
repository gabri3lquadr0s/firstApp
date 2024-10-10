import React, {useState, useRef, useEffect} from "react";
import {View, StyleSheet, Text, Image, Button, FlatList, TextInput, Pressable} from "react-native";
import Header from "../../../components/header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const AddMemory = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [where, setWhere] = useState("");
    const [about, setAbout] = useState("");
    const [image, setImage] = useState(null);
    
    const saveMemory = async () => {
        try {
            let currentValue = await AsyncStorage.getItem("memories");
            if (currentValue != null) {
                let json = JSON.parse(currentValue);
                json.push({
                    title: title,
                    year: year,
                    where: where,
                    about: about,
                    image: image,
                })
                await AsyncStorage.setItem("memories", JSON.stringify(json));
            } else {
                let parsedData = JSON.stringify([{
                    title: title,
                    year: year,
                    where: where,
                    about: about,
                    image: image,
                }]);
                await AsyncStorage.setItem("memories", parsedData);
            }
            router.replace('/memories')

        } catch (e) {
            console.log(e);
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    
    return(
        <View style={styles.container}>
            <Header link=".." title="Adicionar nova memória" />
            <View>
                <TextInput style={styles.input} placeholder={"Titulo"} onChangeText={(text) => setTitle(text)} maxLength={30}></TextInput>
                <TextInput style={styles.input} keyboardType="numeric" placeholder={"Ano"} onChangeText={(text) => setYear(text)} maxLength={4}></TextInput>
                <TextInput style={styles.input} placeholder={"Onde"} onChangeText={(text) => setWhere(text)} maxLength={50}></TextInput>
                <TextInput style={styles.input} placeholder={"Sobre"} onChangeText={(text) => setAbout(text)} maxLength={250}></TextInput>
                <Pressable onPress={pickImage} style={styles.imagePicker}>
                    <Text style={styles.imagePickerText}>Adicionar imagem</Text>
                </Pressable>
                {image &&
                    <Image source={{ uri: image }} style={styles.image} />
                }
                <View>
                    <Pressable onPress={() => {saveMemory()}} style={styles.button}>
                        <Text style={styles.buttonText}>Salvar memória</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    input: {
        backgroundColor: "#ffffff",
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#cccccc",
        fontSize: 16,
        width: "90%",
        alignSelf: "center",
    },
    button: {
        backgroundColor: "blue",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 30,
        width: "90%",
        alignSelf: "center"
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "600",
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginVertical: 15,
    },
    imagePicker: {
        backgroundColor: "#e0e0e0",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
        width: "90%",
        alignSelf: "center",
    },
    imagePickerText: {
        fontSize: 16,
        color: "#333333",
    }
})

export default AddMemory