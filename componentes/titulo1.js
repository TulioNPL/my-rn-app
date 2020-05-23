import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Titulo1(props) {
    return (
        <View style={estilos.titulo1}>
            <Text style={estilos.textoTitulo1}>{props.children}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    titulo1: {
        borderBottomColor: '#306090',
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: '#e0e0e0'
    },
    textoTitulo1: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})