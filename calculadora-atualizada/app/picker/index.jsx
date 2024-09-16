// import React, { useState, useEffect } from "react";
// import {View, Text, StyleSheet, Image} from "react-native";
// import {Picker} from '@react-native-picker/picker';
//
// const style = StyleSheet.create({
// })
//
// export default Selecionar = () => {
//     const [pokemon, setPokemon] = useState('')
//     const [pokemons, setPokemons] = useState([])
//     const [filtro, setFiltro] = useState('');
//     const [img, setImg] = useState('');
//
//     useEffect(() => {
//         if(filtro === "" || filtro === "Selecione um filtro") {
//             fetch(`https://api.batmanapi.com/v1/characters?pagination[pageSize]=100`)
//                 .then(response => response.json())
//                 .then(data => setPokemons(data.data))
//         } else {
//             fetch(`https://api.batmanapi.com/v1/characters?pagination[pageSize]=100&filters[role][$eqi]=${filtro}`)
//                 .then(response => response.json())
//                 .then(data => setPokemons(data.data))
//         }
//     }, [filtro])
//
//     console.log(img)
//     console.log(pokemons)
//     return <View style={style.container}>
//         <Text style={style.texto}>Selecione um personagem abaixo:</Text>
//         <Picker
//             selectedValue={filtro}
//             style={style.picker}
//             onValueChange={(itemValue) => setFiltro(itemValue)}>
//             <Picker.Item label="Selecione um filtro"/>
//             <Picker.Item label="Hero"/>
//             <Picker.Item label="Support"/>
//             <Picker.Item label="Villain"/>
//             <Picker.Item label="Anti-Hero/Villain" />
//         >
//         </Picker>
//         <Picker
//             selectedValue={pokemon}
//             style={style.picker}
//             onValueChange={(itemValue) => {
//                 const i = JSON.parse(itemValue)
//                 setPokemon(i.name)
//                 setImg(i.img)
//             }}>
//             <Picker.Item label="Selecione um personagem"/>
//             {pokemons.map((item, index) => (
//                 <Picker.Item key={index} label={item.attributes.alias !== "None" ? item.attributes.alias : item.attributes.name} value={JSON.stringify({
//                     name: item.attributes.alias !== "None" ? item.attributes.alias : item.attributes.name,
//                     img: item.attributes.image_url
//                 })}/>
//             ))}
//         </Picker>
//         {pokemon?<Text>Você Selecionou: {pokemon}</Text>: ''}
//
//         <Image source={{
//             uri: img,
//         }} />
//     </View>
// }

import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Link} from "expo-router";

const App = () => {
    const [element, setElement] = useState('');
    const [pokemon, setPokemon] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [elements, setElements] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [img, setImg] = useState('');


    async function getPokemons() {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
            const data = await res.json();
            setPokemons(data.results);
            setFilteredPokemons(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    async function getPokemonTypes() {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/type');
            const data = await res.json();
            setElements(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPokemons();
        getPokemonTypes();
    }, []);

    const handleElementChange = async (element) => {
        setElement(element);
        let pokemonList = [...pokemons];
        if (element) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/type/${element}`);
                const data = await response.json();
                const filteredPokemonsByType = data.pokemon.map(p => p.pokemon.name);
                pokemonList = pokemonList.filter(p => filteredPokemonsByType.includes(p.name));
            } catch (error) {
                console.error(error);
            }
        }
        setFilteredPokemons(pokemonList);
    };

   async function getImg() {
        setPokemon(url);
        try {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setImg(data.sprites.front_default);
                });
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>

            <Picker
                selectedValue={element}
                style={styles.picker}
                onValueChange={handleElementChange}
            >
                <Picker.Item label="Selecione um tipo" value="" />
                {elements.map((type, index) => (
                    <Picker.Item key={index} label={type.name} value={type.name} />
                ))}
            </Picker>
            <Picker
                selectedValue={pokemon}
                style={styles.picker}
                onValueChange={getImg}
            >
                <Picker.Item label="Selecione um pokemon" value="" />
                {filteredPokemons.map((type, index) => (
                    <Picker.Item key={index} label={type.name} value={type.url} />
                ))}
            </Picker>

            {img ? (
                <Image
                    source={{ uri: img }}
                    style={styles.image}
                />
            ) : null}

            <View>
                <Link href="../">
                    Voltar
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%',
        paddingHorizontal: 10,
    },
    picker: {
        width: '80%',
        height: 40,
        marginTop: 20,
    },
    card: {
        alignItems: 'center',
        margin: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});

export default App;