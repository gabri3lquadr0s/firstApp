import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView} from "react-native";
import {Link} from "expo-router";

const Index = () => {
    return (
        <SafeAreaView>
            <Text style={styles.title}>Bem vindo!</Text>
            <Link href="./calculadora" style={styles.links}>
                <Text style={styles.linkText}>Calculadora</Text>
            </Link>
            <Link href="./calculadora-atualizada" style={styles.links}>
                <Text style={styles.linkText}>Calculadora-Atualizada</Text>
            </Link>
            <Link href="./contador" style={styles.links}>
                <Text style={styles.linkText}>Contador</Text>
            </Link>
            <Link href="./flatlist" style={styles.links}>
                <Text style={styles.linkText}>Flatlist</Text>
            </Link>
            <Link href="./loginComApi" style={styles.links}>
                <Text style={styles.linkText}>Login com API</Text>
            </Link>
            <Link href="./picker" style={styles.links}>
                <Text style={styles.linkText}>Picker</Text>
            </Link>
            <Link href="./splashscreen" style={styles.links}>
                <Text style={styles.linkText}>Splashscreen</Text>
            </Link>
        </SafeAreaView>
    )
}

export default Index

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#333',
    },
    links: {
        backgroundColor: '#007bff',
        padding: 10,
        marginVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    linkText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
})