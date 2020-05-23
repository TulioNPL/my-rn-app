import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Titulo1 from './titulo1';
import Tarefa from './tarefa.js';

export default function Tarefas(props) {
    return (
        <FlatList
            data={props.lista}

            renderItem={({ item }) => (
                <Tarefa id={item.id} descricao={item.descricao} onAltera={props.onAltera} onApaga={props.onApaga}/>
            )}

            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => <Titulo1>Minhas tarefas</Titulo1>}
            ItemSeparatorComponent={() => <View style={estilos.separador}/>}
        />
    );
}

const estilos = StyleSheet.create({
    lista: {
        flex: 1,
    },
    separador: {
        height: 1,
        backgroundColor: '#CED0CE',
    },  
})