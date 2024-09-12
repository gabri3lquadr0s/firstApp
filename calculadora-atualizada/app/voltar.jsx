import React from "react";
import {View, StyleSheet} from 'react-native';
import { Link } from "expo-router";

const Voltar = () => {
    return (
        <View style={styles.linkCon}>
            <Link href="../">
                Voltar
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    linkCon: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
    }
})

export default Voltar