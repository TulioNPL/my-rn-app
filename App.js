import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={estilos.app}>
      <View style={estilos.conteudo}>
        <View style={[estilos.caixaVermelha, estilos.caixa]}>
          <View style={estilos.blocoTexto}>
            <Text style={estilos.texto}>Vermelho</Text>
          </View>
        </View>
        <View style={[estilos.caixaVerde,estilos.caixa]}>
          <View style={estilos.blocoTexto}>
            <Text style={estilos.texto}>Verde</Text>
          </View>
        </View>
        <View style={[estilos.caixaAzul,estilos.caixa]}>
          <View style={estilos.blocoTexto}>
            <Text style={estilos.texto}>Azul</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  app:{
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'black',
  },
  conteudo:{
    flex: 1,
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    justifyContent: 'space-evenly',
  },
  caixaVermelha:{
    flex:0.30,
    backgroundColor: 'red',
  },
  caixaVerde:{
    flex:0.30,
    backgroundColor: 'green',
  },
  caixaAzul:{
    flex:0.30,
    backgroundColor: 'blue',
  },
  caixa: {
    height: 100,
    width: 100,
  },
  blocoTexto: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto:{
    color: 'white',
    fontSize: 16,
    backgroundColor: 'black',
  },
});
