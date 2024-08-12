import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
    const [email, setEmail] = useState('');
    const [res, setRes] = useState('');

    function resget() {
        setRes(`Loggin in as ${email}`);
    }

    return(
        <View >
            <SafeAreaView style={style.container}>
                <LinearGradient
                    colors={['#103C9F', '#36B8C9']}
                    style={style.background}
                />
                <Image 
                    source={{
                        uri: 'https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png',
                    }}
                    style={style.img}
                />
                <SafeAreaView style={style.container}>
                    <TextInput 
                    style={style.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    />
                    <TextInput 
                    style={style.input}
                    placeholder="Senha" 
                    />
                    <Button
                    onPress={() => resget()}
                    title="login"
                    color="#00F3FC"
                    />
                    <Text>{res}</Text>
                </SafeAreaView>
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    img: {
        marginTop: 150,
        width: 370,
        height: 200,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        backgroundColor: '#fff',
    },
})

export default App;