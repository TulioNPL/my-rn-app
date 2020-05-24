import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, Platform, AsyncStorage, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import Constants from 'expo-constants';
import NavBar from './componentes/navbar';
import Tarefas from './componentes/tarefas';
import { Container, Content, H1, Button, Text, Item, Label, Input, Toast, Root } from 'native-base';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [campo, setCampo] = useState('');

  const [compativel, setCompativel] = useState(false);
  const [autenticavel, setAutenticavel] = useState(false);
  const [autenticado, setAutenticado] = useState(false);

  const autenticar = async () => {
    const aut = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autorize o acesso a lista de tarefas.'
    });
    if(aut.success) setAutenticado(true);
  }

  const armazenaDados = async () => {
    try {
      await AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
    } catch (e) {
      Alert.alert('Os não foram armazenados!');
    }
  }

  const recuperaDados = async () => {
    try {
      const t = await AsyncStorage.getItem('tarefas');
      if (t !== null) setTarefas(JSON.parse(t));
    } catch (e) {
      Alert.alert('Os não foram carregados!');
    }
  }

  const verificaCompatibilidade = async () => {
    try {
      const comp = await LocalAuthentication.hasHardwareAsync();
      if (comp) setCompativel(true);
      const aut = await LocalAuthentication.isEnrolledAsync();
      if (aut) setAutenticavel(true);
    } catch (e) {
      Alert.alert('Não foi possível identificar os recursos de autenticação de usuário!');
    }
  }

  useEffect(() => {
    recuperaDados();
    verificaCompatibilidade();
  }, []);

  useEffect(() => {
    armazenaDados();
  }, [tarefas]);

  const adicionaTarefa = (t) => {
    if (t.length > 0) {
      const novaTarefa = {
        id: Math.random().toString(),
        descricao: t,
      };

      setTarefas([...tarefas, novaTarefa]);
      setCampo('');
      Toast.show({
        text: "Tarefa adicionada!",
        position: "top",
      });
    }
  }

  const alteraTarefa = (id, d) => {
    const i = tarefas.findIndex((t) => t.id === id);
    let novaLista = [...tarefas];
    novaLista[i].descricao = d;
    setTarefas(novaLista);
    Toast.show({
      text: "Tarefa alterada!",
      position: "top",
    });
  }

  const apagaTarefa = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id));
    Toast.show({
      text: "Tarefa removida!",
      position: "top",
    });
  };

  return (
    <Root>
      {!compativel || !autenticavel || autenticado ? ( 
        <Container>
          <NavBar estado={tarefas.length} />
          <Content>
            <Item stackedLabel style={estilos.campo}>
              <Label>Nova Tarefa</Label>
              <Input 
                defaultValue={campo}
                onChangeText={(campo) => setCampo(campo)}
                onSubmitEditing={() => adicionaTarefa(campo)}
              />
            </Item>
            <Tarefas 
              lista={tarefas} 
              onAltera={alteraTarefa} 
              onApaga={apagaTarefa} 
            />
          </Content>
        </Container>
      ) : (
        <Container style={estilos.container}>
          <Content contentContainerStyle={estilos.login}>
            <H1 style={estilos.loginTexto}>Tô ferrado 1.0</H1>
            <Button light large onPress={autenticar}>
              <Text>Entrar</Text>
            </Button>
          </Content>
        </Container>
      )}
    </Root>
  );
}
const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#306090',
  },  
  login: {
    justifyContent: 'center',
    flex: 0.9,
    alignItems: 'center',
  }, 
  loginTexto: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    height: 80,
    paddingTop: 30,
  },
  campo:{
    backgroundColor: '#EAEAEA',
    margin: 10,
  },  
});