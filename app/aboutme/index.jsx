import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, Pressable} from "react-native";
import {Link} from "expo-router";
import Header from "../../components/header";

const AboutMe = () => {
    return (
        <View style={styles.container}>
            <Header link=".." title="Sobre mim"  />
            <Image style={styles.image} source={require('../../assets/foto.jpg')} />
            <View>
                <Text style={styles.title}>
                    Bem vindos ao meu app!
                </Text>
                <Text style={styles.subtitle}>
                    Olá, meu nome é Gabriel! Sou desenolvedor Back-End, sou estagiário na Intelbras S.A., estudo no SESI/SENAI de São
                    José o Ensino Médio com Técnico de Desenvolvimento de Sistemas integrado.
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btn}>
                    <Link href={"./games"}>
                        <Text style={styles.btnTxt}>Games</Text>
                    </Link>
                </Pressable>

                <Pressable style={styles.btn}>
                    <Link href={"./programming"}>
                        <Text style={styles.btnTxt}>Programação</Text>
                    </Link>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 25,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        margin: 10,
        textAlign: "center",
    },
    image: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginTop: 30,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    btnContainer: {
        flex: 1,
        flexDirection: "column",
    },
    btn: {
        margin: 10,
        width: 200,
        height: 30,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    btnTxt: {
        color: "#fff",
        fontSize: 20
    }
})

export default AboutMe;