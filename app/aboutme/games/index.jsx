import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, FlatList, ScrollView} from "react-native";
import Header from "../../../components/header";
import Item from "../../../components/item";

const items = [
    {
        'id': 1,
        'nome': 'Batman Arkham City',
        'img': 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/capsule_616x353.jpg',
        'descricao': 'A sequência aclamada de Batman: Arkham Asylum, onde o Cavaleiro das Trevas enfrenta novos inimigos em uma Gotham isolada e perigosa. Com combates dinâmicos e uma história envolvente, Arkham City eleva o padrão dos jogos de super-heróis.',
        'genero': 'Ação/Aventura',
        'lancamento': '18 de outubro de 2011',
        'desenvolvedor': 'Rocksteady Studios',
        'goback': 'games'
    },
    {
        'id': 2,
        'nome': 'Yakuza',
        'img': 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/834530/capsule_616x353.jpg',
        'descricao': 'Yakuza: Like a Dragon reinventa a série Yakuza com um novo protagonista, Ichiban Kasuga, e um inovador sistema de combate em turnos. Explore a cidade de Yokohama enquanto Kasuga busca redenção e respeito dentro do submundo japonês.',
        'genero': 'RPG/Ação',
        'lancamento': '10 de novembro de 2020',
        'desenvolvedor': 'Ryu Ga Gotoku Studio',
        'goback': 'games'
    },
    {
        'id': 3,
        'nome': 'DOOM (1993)',
        'img': 'https://slayersclub.bethesda.net/_static-slayersclub/images/wallpaper/Doom_original_30th_Wallpaper_3840x2160-01-min.jpg',
        'descricao': 'O clássico que revolucionou o gênero de tiro em primeira pessoa, DOOM coloca o jogador no papel de um fuzileiro espacial enfrentando hordas de demônios no inferno. Com uma jogabilidade rápida e brutal, DOOM se tornou um ícone da cultura gamer.',
        'genero': 'Tiro em primeira pessoa',
        'lancamento': '10 de dezembro de 1993',
        'desenvolvedor': 'id Software',
        'goback': 'games'
    }
];


const Games = () => {

    return (
        <ScrollView style={styles.container}>
            <Header link="../../aboutme" title="Games"  />
            <View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <Item title={item.nome} url={item.img} id={item.id} data={item} goback={"games"} />
                    )}
                    keyExtractor={item => item.nome}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },

})

export default Games;