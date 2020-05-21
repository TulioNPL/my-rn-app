import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

function NavBar({estado}){
  return (
    <View style={estilos.navbar}>
      <Text style={estilos.navbarText}>To ferrado</Text>
      <Text style={estilos.navbarSmallText}>{estado}</Text>
    </View>
  );
}

function Titulo1(props) {
  return(
    <View style={estilos.titulo1}>
      <Text style={estilos.textoTitulo1}>{props.children}</Text>
    </View>
  )
}

function Tarefas({lista}) {
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

export default function App() {
  const [tarefas,setTarefas] = useState([
    {id: 'task1', descricao: 'Declarar IRPF'},
    {id: 'task2', descricao: 'Estudar React'},
    {id: 'task3', descricao: 'Consertar o carro'},
  ])
  
  return (
    <View style={estilos.app}> 
      <View style={estilos.conteudo}>
        <NavBar estado={tarefas.length+ ' tarefas pendentes.'}/>
        <Tarefas lista={tarefas}/>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  app:{
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#306090',
  },
  conteudo:{
    flex: 1,
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  caixaItem: {
    borderBottomColor: '#306090',
    borderBottomWidth: 1,
    padding: 15,
  },
  textoItem:{
    fontSize: 16,
  },
  lista:{
    flex: 1,
  },
  titulo1:{
    borderBottomColor: '#306090',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: '#e0e0e0'
  },
  textoTitulo1:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navbar: {
    backgroundColor: '#306090',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  navbarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  navbarSmallText: {
    color: 'white',
    fontSize: 15,
  }
});
