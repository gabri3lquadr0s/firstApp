import React from 'react';
import {useState, useContext, useEffect} from "react";
import { AppContext } from "../../../scripts/AppContext";
import {View, Text, Image, StyleSheet, Button, Pressable, SafeAreaView, FlatList} from 'react-native';
import Header from "../../../components/header";


const Item = ({id, name, vendor, price}) => {
    return(
        <View>
            <View >
                <Text style={styles.info}>{name}</Text>
                <Text style={styles.info}>{vendor}</Text>
            </View>
            <View>
                <Text style={styles.price}>R$ {price}</Text>
            </View>
        </View>
    )
}

const App = () => {
    const {cart, setCart} = useContext(AppContext);
    const keyExtractor = (item, index) => index.toString();
    const [total, setTotal] = useState(0);

    const handleExcludeItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    }

    useEffect(() => {
        let a = 0;
        let b = cart.map((item) => {a = a + item.price});
        setTotal(a.toFixed(2));
    })

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Header link=".." title="Seu carrinho" />
            </View>
            <FlatList data={cart} renderItem={({item, index}) => (
                    <View style={styles.item}>
                        <Item name={item.name} vendor={item.vendor} price={item.price} id={item.id} />
                        <Pressable onPress={() => handleExcludeItem(index)} style={styles.x}>
                            <Text style={styles.xtxt}>X</Text>
                        </Pressable>
                    </View>
                )} keyExtractor={keyExtractor}
            />
            <View>
                <Text style={styles.total}>Total: R$ {total}</Text>
                <View style={styles.end}>
                    <Pressable onPress={() => setCart([])} style={styles.press}>
                        <Text style={styles.pressTxt}>Limpar carrinho</Text>
                    </Pressable>
                    <Pressable style={styles.press}>
                        <Text style={styles.pressTxt}>Finalizar compra</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      marginBottom: 20,
    },
    container: {
        flex: 1,
    },
    end: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 15,
    },
    press: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: 170,
    },
    pressTxt: {
        color: 'white',
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
        borderWidth: 3,
        borderColor: "gray",
        borderRadius: 10,
        padding: 20,
    },
    x: {
        display: "flex",
        justifyContent: "center"
    },
    xtxt: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
    },
    price: {
        fontSize: 23,
        fontWeight: "bold",
    },
    info: {
        fontSize: 21,
    },
    total: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "900"
    }
})

export default App