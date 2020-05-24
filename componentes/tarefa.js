import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import {Input, Text, Button, ListItem, Icon} from 'native-base';

export default function Tarefa(props) {
    const [campo, setCampo] = useState(props.descricao);
    const [altera, setAltera] = useState(false);
    const confirma = () => {
        setAltera(false);
        props.onAltera(props.id,campo);
    }

    return altera ? (
        <ListItem style={estilos.caixaTarefa}>
            <Input style={estilos.campo}
                defaultValue={props.descricao}
                onChangeText={(c) => setCampo(c)}
                onSubmitEditing={confirma}
                autoFocus
            />
        </ListItem>
    ) : (
        <ListItem>
            <Text style={estilos.texto}>{props.descricao}</Text>
            <Button small info style={estilos.botao} onPress={() => setAltera(true)}>
                <Icon type="FontAwesome" name="edit"/>
            </Button>
            <Button small danger style={estilos.botao} onPress={() => props.onApaga(props.id)}>
                <Icon type="FontAwesome" name="trash"/>
            </Button>
        </ListItem>
    );
}

const estilos = StyleSheet.create({
    texto: {
        flex:1,
    },
    botao: {
        marginLeft: 5,
    },
    campo:{
        backgroundColor: '#EAEAEA',
    },  
})