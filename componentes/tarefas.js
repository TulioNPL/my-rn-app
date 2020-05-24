import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { H1, List } from 'native-base';
import Tarefa from './tarefa.js';

export default function Tarefas(props) {
    return (
        <React.Fragment>
            <H1 style={estilos.h1}>Minhas Tarefas</H1>
            <List>
                {props.lista.map((item) =>
                    <Tarefa 
                        key={item.id}
                        id={item.id} 
                        descricao={item.descricao} 
                        onAltera={props.onAltera} 
                        onApaga={props.onApaga}
                    />
                )}
            </List>
        </React.Fragment>
    );
}

const estilos = StyleSheet.create({
    h1:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 15,
        textAlign: 'center',
    },
})