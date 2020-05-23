import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Tarefa({id, descricao}) {
    return (
        <View style={estilos.caixaTarefa}>
            <Text style={estilos.textoTarefa}>{descricao}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    caixaTarefa: {
        padding: 15,
    },
    textoTarefa: {
        fontSize: 16,
    },
})