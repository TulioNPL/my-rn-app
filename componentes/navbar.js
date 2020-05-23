import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NavBar({ estado }) {
    return (
        <View style={estilos.navbar}>
            <Text style={estilos.navbarText}>To ferrado</Text>
            <Text style={estilos.navbarSmallText}>{estado}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
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
})
