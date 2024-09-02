import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, Button,} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import Modal from "react-native-modal";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modal, setModal] = useState('');

    async function registerUser() {
        if(!email || !password || !name){
            return;
        }

        try {
            const response = await axios.post(
            `https://taskhub-s37f.onrender.com/auth/signup`,
            {"name":name,"email":email,"password":password}
            );
            if (response.status === 200) {
                setModal('Usuário criado com sucesso');
                setIsModalVisible(() => !isModalVisible);
            } else {
                setModal('Criação de usuário falhou');
                setIsModalVisible(() => !isModalVisible);
            }
        } catch (e) {
            setModal('Criação de usuário falhou');
            setIsModalVisible(() => !isModalVisible);
        }
    }

    return (
        <SafeAreaView style={styles.main}>
            <Modal isVisible={isModalVisible} style={styles.modal}>
                <View style={styles.container2}>
                    <Text style={styles.title2}>{modal}</Text>
                    <Button title="Ok" onPress={() => setIsModalVisible(() => !isModalVisible)} color="black"/>
                </View>
            </Modal>
            {/*<View>*/}
            {/*    <Text style={styles.title}>TaskHub</Text>*/}
            {/*</View>*/}
            <View style={styles.container}>
                <Text style={styles.titleForm}>Sign Up</Text>
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTxt}>Name</Text>
                        <TextInput style={styles.input} onChangeText={(text) => setName(text)}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTxt}>Email</Text>
                        <TextInput style={styles.input} onChangeText={(text) => setEmail(text)}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTxt}>Password</Text>
                        <TextInput secureTextEntry style={styles.input} onChangeText={(text) => setPassword(text)}></TextInput>
                    </View>
                    <Pressable style={styles.press} onPress={() => {registerUser()}}><Text style={styles.txtPress}>Sign Up</Text></Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 350,
        borderRadius: 10,
    },
    titleForm: {
        textAlign: "left",
        marginLeft: 10,
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline"
    },
    press: {
        margin: 10,
        width: 120,
        height: 30,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    txtPress: {
        color: "white",
    },
    inputTxt: {
        marginLeft: 12,
    },
    container2: {
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        height: 200
    },
    title2: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
})