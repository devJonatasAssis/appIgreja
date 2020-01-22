import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import FundoCeu from '../../../assets/imgs/ceu.png';
import ProfileImage from '../../../assets/imgs/jonatas.jpg'

export default class MyDados extends Component {

    async componentDidMount() {
        this.buscarMeusDados();
    }

    async buscarMeusDados() {
        const meusDados = await Api('retornaMeusDadosMobile');

        if (meusDados.status) {
            await this.setState({ dados: meusDados.dados });

        } else {
            console.log('Erro ao buscar os meusDados', meusDados);
        }
    }

    render({ item }) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={FundoCeu} />
                    <View style={styles.profile}>
                        <Image style={styles.profileImage} source={ProfileImage} />
                    </View>

                    <ScrollView>
                        <View style={styles.blocoDados}>
                            <Text style={styles.label}>Nome</Text>
                            <Text style={styles.title}>item.nome_pessoa</Text>

                            <Text style={styles.label}>CPF</Text>
                            <Text style={styles.title}>item.cpf</Text>

                            <Text style={styles.label}>RG</Text>
                            <Text style={styles.title}>item.rg</Text>

                            <Text style={styles.label}>CEP</Text>
                            <Text style={styles.title} >item.cep</Text>

                            <Text style={styles.label}>Endereço</Text>
                            <Text style={styles.title}>item.endereco</Text>

                            <Text style={styles.label}>Número</Text>
                            <Text style={styles.title}>item.numero</Text>

                            <Text style={styles.label}>Bairro</Text>
                            <Text style={styles.title}>item.bairro.nome_bairro</Text>

                            <Text style={styles.label}>Cidade</Text>
                            <Text style={styles.title}>item.cidade.nome_cidade</Text>

                            <Text style={styles.label}>Estado</Text>
                            <Text style={styles.title}>item.estado.nome_estado</Text>
                        </View>
                    </ScrollView>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: 50,
    },
    profile: {
        height: 100,
        width: 200,
        marginLeft: 140,
        marginTop: -280,

    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    blocoDados: {
        backgroundColor: "#fff",
        paddingTop: 50,
        marginLeft: 15
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        paddingBottom: 5
    },
    title: {
        paddingBottom: 10
    }
})