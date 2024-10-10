import {Image, Text, View, StyleSheet} from "react-native";
import React from "react";
import {useLocalSearchParams} from "expo-router";
import Header from "../../../components/header";

const Details = () => {
    const { data } = useLocalSearchParams();
    const parsed = JSON.parse(data);
    return (
        <View style={styles.container}>
            <Header link={`../../aboutme/${parsed.goback}`} title={`${parsed.nome}`} />
            <Text style={styles.title}>{parsed.nome}</Text>
            <Image source={{ uri: parsed.img }} style={styles.img} />
            <Text style={styles.description}>Descrição: {parsed.descricao}</Text>
            {
                parsed.genero ? (
                    <Text style={styles.info}>Gênero: {parsed.genero}</Text>
                ) : (<Text style={styles.info}>Linguagem: {parsed.linguagem}</Text>)
            }
            <Text style={styles.info}>{parsed.lancamento}</Text>
            {
                parsed.desenvolvedor ? (
                    <Text style={styles.info}>Desenvolvedor: {parsed.desenvolvedor}</Text>
                ) : (<Text style={styles.info}>Caracteristicas: {parsed.caracteristicas}</Text>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: "800"
    },
    img: {
        width: 400,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    description: {
        fontSize: 18,
        fontStyle: "italic",
        marginVertical: 10,
        color: "#666",
        textAlign: "center",
        paddingHorizontal: 15,
    },
    info: {
        fontSize: 16,
        color: "#444",
        marginVertical: 5,
        fontWeight: "500",
        textAlign: "center",
    },
})

export default Details;