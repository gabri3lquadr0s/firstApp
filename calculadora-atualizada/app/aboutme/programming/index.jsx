import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, ScrollView, FlatList} from "react-native";
import Header from "../../../components/header";
import Item from "../../../components/item";

const items = [
    {
        'nome': 'Django',
        'img': 'https://automationpanda.com/wp-content/uploads/2017/09/django-logo-negative.png',
    },
    {
        'nome': 'NestJS',
        'img': 'https://nestjs.com/img/nest-og.png',
    },
    {
        'nome': 'fastAPI',
        'img': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/FastAPI_b.jpg',
    },
    {
        'nome': 'Postgres',
        'img': 'https://www.driven.com.br/wp-content/uploads/2023/04/postgres-sql.png',
    }
]

const Programming = () => {
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

    }
})

export default Programming;