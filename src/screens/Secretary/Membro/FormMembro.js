import * as React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Api from '../../../services/api';
import AsyncStorage from "@react-native-community/async-storage";

export default class FormMembro extends React.Component {
    state = {
        nome: '',
        cpf: '',
        rg: '',
        dt_nascimento: '',
        endereco: '',
        bairro: '',
        numero: '',
        email: '',
        tel1: ''
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView>
                        <TextInput
                            style={styles.input}
                            value={this.state.nome}
                            onChangeText={nome => this.setState({ nome })}
                            placeholder="Digite o nome do membro..."
                        />


                        <TextInput
                            style={styles.input}
                            label="CPF"
                            mode="outlined"
                            value={this.state.cpf}
                            onChangeText={cpf => this.setState({ cpf })}
                            placeholder="Digite o CPF do membro..."
                        />

                        <TextInput
                            style={styles.input}
                            label="RG"
                            mode="outlined"
                            value={this.state.rg}
                            onChangeText={rg => this.setState({ rg })}
                            placeholder="Digite o RG do membro..."
                        />

                        <TextInput
                            style={styles.input}
                            label="Data de Nascimento"
                            mode="outlined"
                            value={this.state.dt_nascimento}
                            onChangeText={dt_nascimento => this.setState({ dt_nascimento })}
                            placeholder="Digite a Data de Nascimento do membro..."
                        />

                        <TextInput
                            style={styles.input}
                            label="Endereço"
                            mode="outlined"
                            value={this.state.endereco}
                            onChangeText={endereco => this.setState({ endereco })}
                            placeholder="Digite o Endereço do membro..."
                        />

                        <TextInput
                            style={styles.input}
                            label="Bairro"
                            mode="outlined"
                            value={this.state.bairro}
                            onChangeText={bairro => this.setState({ bairro })}
                            placeholder="Digite o Bairro do membro..."
                        />

                        <TextInput
                            style={styles.input}
                            label="Número"
                            mode="outlined"
                            selectionColor="green"
                            value={this.state.numero}
                            onChangeText={numero => this.setState({ numero })}
                            placeholder="Digite o número da casa do membro..."
                        />

                        <TextInput
                            style={styles.input}
                            label="Telefone"
                            mode="outlined"
                            value={this.state.tel1}
                            onChangeText={tel1 => this.setState({ tel1 })}
                            placeholder="Digite o Telefone do membro..."
                        />
                        <TextInput
                            style={styles.input}
                            label="Email"
                            mode="outlined"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder="Digite o email do membro..."
                        />

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => console.log('Registro salvo com Sucesso!')}>
                            <Text style={styles.textoBotao}>Salvar</Text>
                            <Icon style={{ color: "#FFF", marginRight: 100 }} size={20} name="check"></Icon>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    card: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    input: {
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },
    input: {
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        padding: 15
    },
    botao: {
        backgroundColor: "#006400",
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    textoBotao: {
        color: "#fff",
        fontSize: 20,
        marginLeft: 150
    },
});
