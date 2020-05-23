import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';

export default function Tarefa(props) {
    const [campo, setCampo] = useState(props.descricao);
    const [altera, setAltera] = useState(false);
    const confirma = () => {
        setAltera(false);
        Keyboard.dismiss;
        props.onAltera(props.id,campo);
    }

    return (
        <View>
            {altera ? (
                <View style={estilos.caixaTarefa}>
                    <TextInput style={estilos.campo}
                        defaultValue={props.descricao}
                        onChangeText={(c) => setCampo(c)}
                        onSubmitEditing={confirma}
                        onBlur={confirma}
                        autoFocus
                    />
                </View>
            ) : (
                <View style={estilos.caixaTarefa}>
                    <Text style={estilos.textoTarefa}>{props.descricao}</Text>
                    <TouchableOpacity onPress={() => setAltera(true)}>
                        <Text style={estilos.botaoEditar}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.onApaga(props.id)}>
                        <Text style={estilos.botaoApagar}>Apagar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const estilos = StyleSheet.create({
    caixaTarefa: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoTarefa: {
        fontSize: 16,
        flex: 1,
    },
    botaoEditar: {
        padding: 10,
        color: '#FFFFFF',
        backgroundColor: '#0260E8'
    },
    botaoApagar: {
        padding: 10,
        color: '#FFFFFF',
        backgroundColor: '#B40A1B',
    },
    campo: {
        fontSize: 20,
        flex:1,
    }
})