import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class MyDizimos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.titulo}>Total de Lançamentos</Text>
                        <Text style={styles.valorTotal}>R$ 2.700,00</Text>
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.titulo}>Último Lançamento</Text>
                        <Text style={{
                            fontSize: 24,
                            color: "green",
                            fontWeight: "bold",
                            marginTop: 10
                        }}>
                            R$ 200,00
                        </Text>
                    </View>

                    <View style={styles.cardFooter}>
                        <Text style={styles.annotation}>Lançamento de R$ 200,00 referente a Dízimo, entregue no dia 16/10/2019 ás 20:00</Text>
                    </View>
                </View>

                {/* Aqui irá ficar um FlatList */}
                <View style={{ marginTop: 20, flexDirection: "row", width: 300 }}>
                    <Image style={{ width: 100, height: 100 }} source={require('../../../assets/teste/teste2.png')} />
                    <Text style={{ position: "relative", top: 40 }}>Dízimo no valor de R$ 200,00</Text>
                </View>
                <View style={{ flexDirection: "row", width: 300 }}>
                    <Image style={{ width: 100, height: 100 }} source={require('../../../assets/teste/teste2.png')} />
                    <Text style={{ position: "relative", top: 40 }}>Oferta destinada a missões no valor de R$ 200,00</Text>
                </View>
                <View style={{ flexDirection: "row", width: 300 }}>
                    <Image style={{ width: 100, height: 100 }} source={require('../../../assets/teste/teste2.png')} />
                    <Text style={{ position: "relative", top: 40 }}>Dízimo no valor de R$ 200,00</Text>
                </View>
                <View style={{ flexDirection: "row", width: 300 }}>
                    <Image style={{ width: 100, height: 100 }} source={require('../../../assets/teste/teste2.png')} />
                    <Text style={{ position: "relative", top: 40 }}>Dízimo no valor de R$ 200,00</Text>
                </View>
                <View style={{ flexDirection: "row", width: 300 }}>
                    <Image style={{ width: 100, height: 100 }} source={require('../../../assets/teste/teste2.png')} />
                    <Text style={{ position: "relative", top: 40 }}>Dízimo no valor de R$ 200,00</Text>
                </View>
                {/* ---- */}

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    card: {
        backgroundColor: "#FFF",
        height: 280,
        margin: 25,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30
    },
    valorTotal: {
        color: "blue",
        fontSize: 20
    },
    titulo: {
        fontWeight: "bold"
    },
    cardContent: {
        paddingLeft: 30,
        marginBottom: 20
    },
    cardFooter: {
        backgroundColor: "#eee",
        padding: 30,
        borderRadius: 4
    },
    annotation: {
        color: "#333"
    }
});
