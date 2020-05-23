import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Titulo1 from './titulo1';

export default function Tarefas({ lista }) {
    return (
        <View style={estilos.lista}>
            <Titulo1>Minhas tarefas</Titulo1>
            {lista.map((item) => (
                <View key={item.id} style={estilos.caixaItem}>
                    <Text style={estilos.textoItem}>{item.descricao}</Text>
                </View>
            ))}
        </View>);
}

const estilos = StyleSheet.create({
    caixaItem: {
        borderBottomColor: '#306090',
        borderBottomWidth: 1,
        padding: 15,
    },
    textoItem: {
        fontSize: 16,
    },
    lista: {
        flex: 1,
    },
})