import React, {useState, useRef, useEffect} from "react";
import {View, StyleSheet, Text, Image, TextInput, Pressable, TouchableOpacity, ScrollView} from "react-native";
import Header from "../../../components/header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import {CameraView, useCameraPermissions} from "expo-camera";

const AddMemory = () => {
    const [permissions, askPermission] = useCameraPermissions();
    const [camMode, camSetMode] = useState(false)
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [where, setWhere] = useState("");
    const [about, setAbout] = useState("");
    const [image, setImage] = useState(null);
    const [facing, setFacing] = useState("front");
    const cameraRef = useRef(null);

    if(!permissions) {
        return (
            <View style={styles.container}></View>
        )
    }

    if (!permissions.granted && permissions.canAskAgain) {
        askPermission();
    }
    
    const saveMemory = async () => {
        if(title === "" || year === "" || where === ""){
            return;
        }

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
            return;

        } catch (e) {
            console.log(e);
        }
    }

    const changeCam = () => {
        setFacing("front" ? "back" : "front");
    }

    const takePic = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        console.log(foto.uri);
        setImage(foto.uri);
        camSetMode(false);
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
            {!camMode ? (
                <ScrollView style={styles.container}>
                    <Header link=".." title="Adicionar nova memória" />
                    <View>
                        <TextInput style={styles.input} value={title} placeholder={"Titulo"} onChangeText={(text) => setTitle(text)} maxLength={30}></TextInput>
                        <TextInput style={styles.input} value={year} keyboardType="numeric" placeholder={"Ano"} onChangeText={(text) => setYear(text)} maxLength={4}></TextInput>
                        <TextInput style={styles.input} value={where} placeholder={"Onde"} onChangeText={(text) => setWhere(text)} maxLength={50}></TextInput>
                        <TextInput style={styles.input} value={about} placeholder={"Sobre"} onChangeText={(text) => setAbout(text)} maxLength={250}></TextInput>
                        <Pressable onPress={pickImage} style={styles.imagePicker}>
                            <Text style={styles.imagePickerText}>Adicionar imagem da galeria</Text>
                        </Pressable>
                        {permissions.granted ? (
                            <Pressable  style={styles.imagePicker} onPress={() => {camSetMode(true)}}>
                                <Text style={styles.imagePickerText}>Tirar foto</Text>
                            </Pressable>
                        ) : (
                            <Pressable  style={styles.imagePicker} onPress={() => {askPermission()}}>
                                <Text style={styles.imagePickerText}>Permita o uso da câmera para tirar fotos</Text>
                            </Pressable>
                        )}

                        <View>
                            <Pressable onPress={() => {saveMemory()}} style={styles.button}>
                                <Text style={styles.buttonText}>Salvar memória</Text>
                            </Pressable>
                        </View>
                        {image &&
                            <Image source={{ uri: image }} style={styles.image} />
                        }
                    </View>
                </ScrollView>
            ) : (
                <View style={styles.container}>
                    <CameraView facing={facing} style={styles.camera} ref={cameraRef}>
                        <View style={styles.cambtn}>
                            <TouchableOpacity onPress={() => takePic()}>
                                <Image
                                    style={styles.img2}
                                    source={require('../../../assets/camera.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeCam()}>
                                <Image
                                    style={styles.img2}
                                    source={require('../../../assets/switch-camera.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => camSetMode(false)}>
                                <Image
                                    style={styles.img2}
                                    source={require('../../../assets/voltar.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </CameraView>
                </View>
            )}

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
        height: 400,
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
    },
    cambtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'flex-end',
        marginBottom: 20,
        width: 300
    },
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img2: {
        width: 45,
        height: 45
    }
})

export default AddMemory