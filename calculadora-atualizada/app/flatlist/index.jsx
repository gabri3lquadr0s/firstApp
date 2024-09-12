import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import Voltar from "../voltar";

const DATA = [
    { 'id': 1, 'nome': 'teste', 'concluido': false },
    { 'id': 2, 'nome': 'teste2', 'concluido': true },
];

const Item = ({ nome, concluido, onPress }) => {
    return (
        <View style={style.item}>
            {concluido ? (
                <Pressable onPress={onPress}>
                    <Text style={style.textItem}>{nome}</Text>
                </Pressable>
            ) : (
                <Pressable onPress={onPress}>
                    <Text style={style.textItemDash}>{nome}</Text>
                </Pressable>
            )}
        </View>
    );
};

const App = () => {
    const [tarefas, setTarefas] = useState(DATA);

    function check(id) {
        setTarefas(tarefas.map(item =>
            item.id === id ? { ...item, concluido: !item.concluido } : item
        ));
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Lista de Afazeres</Text>
            <FlatList
                data={tarefas}
                renderItem={({ item }) => (
                    <Item nome={item.nome} concluido={item.concluido} onPress={() => check(item.id)} />
                )}
                keyExtractor={item => item.id.toString()}
            />
            <View style={style.voltarContainer}>
                <Voltar />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        padding: 10,
    },
    textItemDash: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 13,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 13,
    },
    textItem: {
        fontSize: 13,
    },
    title: {
        fontSize: 32,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    voltarContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;
