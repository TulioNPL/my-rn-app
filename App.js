import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import NavBar from './componentes/navbar';
import Tarefas from './componentes/tarefas';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 'task1', descricao: 'Declarar IRPF' },
    { id: 'task2', descricao: 'Estudar React' },
    { id: 'task3', descricao: 'Consertar o carro' },
  ])

  return (
    <View style={estilos.app}>
      <View style={estilos.conteudo}>
        <NavBar estado={tarefas.length + ' tarefas pendentes.'} />
        <Tarefas lista={tarefas} />
      </View>
    </View>
  );
}
const estilos = StyleSheet.create({
  app: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#306090',
  },
  conteudo: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
});