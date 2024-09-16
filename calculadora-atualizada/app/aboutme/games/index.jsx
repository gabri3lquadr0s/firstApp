import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, FlatList, ScrollView} from "react-native";
import Header from "../../../components/header";
import Item from "../../../components/item";

const items = [
    {
        'nome': 'Batman Arkham City',
        'img': 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/capsule_616x353.jpg',
    },
    {
        'nome': 'Yakuza',
        'img': 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/834530/capsule_616x353.jpg',
    },
    {
        'nome': 'Doom',
        'img': 'https://slayersclub.bethesda.net/_static-slayersclub/images/wallpaper/Doom_original_30th_Wallpaper_3840x2160-01-min.jpg',
    }
]

const Games = () => {

    return (
        <ScrollView style={styles.container}>
            <Header link="../../aboutme" title="Games"  />
            <View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <Item title={item.nome} url={item.img} />
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