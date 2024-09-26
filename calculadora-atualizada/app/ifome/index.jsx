import React from 'react';
import {useState, useContext, useEffect} from "react";
import { AppContext } from "../../scripts/AppContext";
import {View, Text, Image, StyleSheet, Button, Pressable, SafeAreaView, FlatList} from 'react-native';
import Header from "../../components/header";
import {Link} from "expo-router";


const Item = ({name, vendor, price, img, id}) => {
    const {cart, setCart} = useContext(AppContext);

    return(
        <View style={styles.itemContainer}>
            <View>
                <Image
                    source={{uri: img}}
                    style={styles.img}
                />
            </View>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.vendor}>{vendor}</Text>
                <Text style={styles.price}>R$ {price}</Text>
                <Pressable style={styles.buy} onPress={() => {
                    setCart([...cart, {"id": id, "name": name, "vendor": vendor, "price": price}]);
                }}>
                    <Text style={styles.buyTxt}>Adicionar ao carrinho</Text>
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
            <View style={styles.header}>
                <Header link=".." title="iFome" />
                <View style={styles.cartArea}>
                    <Image source={require('../../assets/cart.png')} style={styles.cartImg}/>
                    <Text style={styles.txtCart}>{cart.length} itens</Text>
                    {
                        cart.length > 0 &&
                        <Link href="./cart" style={styles.link}>
                            <Text>Finalizar compra</Text>
                        </Link>
                    }
                </View>
            </View>
            <FlatList data={foods} renderItem={({item}) => (
                <Item name={item.name} vendor={item.vendor} price={item.price} img={item.img} id={item.id} />
                )} keyExtractor={item => item.id.toString()}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
        marginLeft: 20,
        marginRight: 20,
    },
    cartArea: {
        textAlign: "right",
        padding: 20,
        display: "flex",
        flexDirection: "row",

    },
    txtCart: {
        marginRight: 20,
        display: "flex",
        alignItems: "center",
    },
    link: {
        backgroundColor: '#007bff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        color: 'white'
    },
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 20,
    },
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 40,
        borderWidth: 3,
        borderColor: "gray",
        borderRadius: 10,
        padding: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    vendor: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    buy: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: 170
    },
    buyTxt: {
        color: 'white'
    },
    cartImg: {
        width: 30,
        height: 30,
        marginRight: 20
    }
})

export default App;