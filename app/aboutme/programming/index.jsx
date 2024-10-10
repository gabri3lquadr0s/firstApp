import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, ScrollView, FlatList} from "react-native";
import Header from "../../../components/header";
import Item from "../../../components/item";

const items = [
    {
        'id': 1,
        'nome': 'Django',
        'img': 'https://automationpanda.com/wp-content/uploads/2017/09/django-logo-negative.png',
        'descricao': 'Django é um framework web de alto nível escrito em Python, que incentiva o desenvolvimento rápido e o design limpo e pragmático. Famoso por ser "baterias inclusas", ele oferece diversas funcionalidades integradas, como autenticação, administração, e roteamento.',
        'linguagem': 'Python',
        'lancamento': '21 de julho de 2005',
        'caracteristicas': "ORM, Admin Interface, Autenticação, Suporte a REST API",
        'goback': 'programming'
    },
    {
        'id': 2,
        'nome': 'NestJS',
        'img': 'https://nestjs.com/img/nest-og.png',
        'descricao': 'NestJS é um framework de desenvolvimento de back-end progressivo baseado em Node.js, que usa TypeScript. Ele é inspirado no Angular e segue uma arquitetura modular, sendo amplamente utilizado para criar APIs eficientes e escaláveis, com suporte nativo para GraphQL e WebSockets.',
        'linguagem': 'TypeScript',
        'lancamento': '20 de fevereiro de 2017',
        'caracteristicas': "Suporte a Microserviços, GraphQL, WebSockets, Arquitetura Modular",
        'goback': 'programming'
    },
    {
        'id': 3,
        'nome': 'FastAPI',
        'img': 'https://www.simplilearn.com/ice9/free_resources_article_thumb/FastAPI_b.jpg',
        'descricao': 'FastAPI é um framework web moderno e de alto desempenho para construir APIs com Python. Ele é baseado em Pydantic e type hints do Python, proporcionando validação de dados automática e geração de documentação interativa.',
        'linguagem': 'Python',
        'lancamento': '5 de dezembro de 2018',
        'caracteristicas': "Desempenho Rápido, Suporte a Asynchronous, Documentação Automática, Type Hints",
        'goback': 'programming'
    },
    {
        'id': 4,
        'nome': 'PostgreSQL',
        'img': 'https://www.driven.com.br/wp-content/uploads/2023/04/postgres-sql.png',
        'descricao': 'PostgreSQL é um poderoso sistema de gerenciamento de banco de dados relacional de código aberto. Ele oferece suporte avançado a SQL, transações ACID, e extensões personalizadas, sendo utilizado amplamente por empresas que precisam de flexibilidade e robustez no armazenamento de dados.',
        'linguagem': 'SQL',
        'lancamento': '8 de julho de 1996',
        'caracteristicas': "Suporte a JSONB, Transações ACID, Escalabilidade, Extensível",
        'goback': 'programming'
    }
];



const Programming = () => {
    return (
        <ScrollView style={styles.container}>
            <Header link="../../aboutme" title="Games"  />
            <View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <Item title={item.nome} url={item.img} id={item.id} data={item} goback={"programming"}  />
                    )}
                    keyExtractor={item => item.nome}
                />
            </View>
        </ScrollView>
    )
}
//goback={"programming"}
const styles = StyleSheet.create({
    container: {

    }
})

export default Programming;