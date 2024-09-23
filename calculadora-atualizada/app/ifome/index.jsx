import React from 'react';
import {useState, useContext, useEffect} from "react";
import { AppContext } from "../../scripts/AppContext";
import {View, Text, Image, StyleSheet, Button, Pressable, SafeAreaView, FlatList} from 'react-native';
import Header from "../../components/header";


const Item = ({name, vendor, price, img, id}) => {
    const {cart, setCart} = useContext(AppContext);

    console.log(cart)
    return(
        <View>
            <View>
                <Image
                    source={{uri: img}}
                />
            </View>
            <View>
                <Text>{name}</Text>
                <Text>{vendor}</Text>
                <Text>{price}</Text>
                <Pressable onPress={() => {
                    setCart([...cart, id]);
                }}>
                    <Text>Comprar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const App = () => {
    const {foods, setFoods} = useContext(AppContext);
    const {cart, setCart} = useContext(AppContext);

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Header link=".." title="iFome" />
                <Text>Carrinho: {cart.length}</Text>
            </View>
            <View>
                <FlatList data={foods} renderItem={({item}) => (
                    <Item name={item.name} vendor={item.vendor} price={item.price} img={item.img} id={item.id} />
                )} keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default App;