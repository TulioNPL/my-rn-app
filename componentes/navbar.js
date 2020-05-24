import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Left, Title, Right, Badge, Header } from 'native-base';

export default function NavBar({ estado }) {
    return (
        <Header style={estilos.header} iosBarStyle="light-content">
            <Left>
                <Title style={estilos.title}>Tô ferrado</Title>
            </Left>
            <Right>
                <Badge info>
                    <Text>{estado}</Text>
                </Badge>
            </Right>
        </Header>
    );
}

const estilos = StyleSheet.create({
    header:{
        backgroundColor: '#306090',
    },
    title:{
        color: 'white',
        fontSize: 30,
    }
})
