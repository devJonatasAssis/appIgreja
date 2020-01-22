import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native';

import Proccess from '../../../assets/imgs/process.png';

export default function Config() {
    return (
        <View style={styles.container}>

            <Image source={Proccess} style={{width: 100, height: 100, marginBottom: 50}}/>
            <TouchableOpacity style={styles.botao} onPress={() => { Linking.openURL('https://www.sistemaupigreja.com/manual') }}>
                <Text style={styles.botaoTexto}>Ajuda</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center"
    },
    botao: {
        height: 50,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    botaoTexto: {
        color: "#fff",
        fontSize: 18,
        width: 200,
        fontWeight: "bold",
        textAlign: "center"
    }
})