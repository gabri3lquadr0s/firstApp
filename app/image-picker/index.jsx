import React from 'react';
import {useState, useContext, useEffect} from "react";
import { AppContext } from "../../scripts/AppContext";
import {View, Text, Image, StyleSheet, Button, Pressable, SafeAreaView, FlatList} from 'react-native';
import Header from "../../components/header";
import {Link} from "expo-router";
import * as ImagePicker from "expo-image-picker";


export default App = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Isso é um teste</Text>
            <Button title="Pick an image from camera roll" onPress={pickImage} style={styles.btn}/>
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    btn: {
        marginTop: 200
    }
    })
