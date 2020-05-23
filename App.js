import React, { useState } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, Platform, Button, Keyboard } from 'react-native';
import Constants from 'expo-constants';
import NavBar from './componentes/navbar';
import Tarefas from './componentes/tarefas';

export default function App() {
  let _input;
  const [tarefas, setTarefas] = useState([
    {id: '1', descricao: 'Pagar as contas'},
    {id: '2', descricao: 'Lavar o carro'}
  ]);
  const [campo, setCampo] = useState('');

  const adicionaTarefa = (t) => {
    if (t.length > 0) {
      const novaTarefa = {
        id: Math.random().toString(),
        descricao: t,
      };

      setTarefas([...tarefas, novaTarefa]);
      setCampo('');
    }
    _input.blur();
  }

  const alteraTarefa = (id, d) => {
    const i = tarefas.findIndex((t) => t.id===id);
    let novaLista = [...tarefas];
    novaLista[i].descricao = d;
    setTarefas(novaLista);
  }

  const apagaTarefa = (id) => setTarefas(tarefas.filter((t) => t.id!==id));

  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={estilos.app}>
      <View style={estilos.conteudo}>
        <NavBar estado={tarefas.length + ' tarefas pendentes.'} />
        <Tarefas lista={tarefas} onAltera={alteraTarefa} onApaga={apagaTarefa}/>
        <View style={estilos.caixaCampo}>
          <TextInput
            styles={estilos.campo}
            placeholder="Nova Tarefa"
            defaultValue={campo}
            onChangeText={(campo) => setCampo(campo)}
            onSubmitEditing={() => adicionaTarefa(campo)}
            onBlur={Keyboard.dismiss}
            ref={(r) => (_input = r)}
          />
          <Button onPress={() => adicionaTarefa(campo)} title="Adicionar" />
        </View>
      </View>
    </KeyboardAvoidingView>
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
  caixaCampo: {
    margin: 15,
    height: 50,
    flexDirection: 'row',
  },
  campo: {
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    flex: 1,
  }
});