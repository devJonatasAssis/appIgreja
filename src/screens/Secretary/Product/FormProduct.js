import * as React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import Api from '../../../services/api';
import AsyncStorage from "@react-native-community/async-storage";

export default class FormProduto extends React.Component {
    state = {
        nome_produto: '',
        valor: '',
        dt_hr_cadastro: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView>
                        <TextInput
                            style={styles.input}
                            value={this.state.nome_produto}
                            onChangeText={nome_produto => this.setState({ nome_produto })}
                            placeholder="Digite o nome do produto..."
                        />


                        <TextInput
                            style={styles.input}
                            value={this.state.valor}
                            onChangeText={valor => this.setState({ valor })}
                            placeholder="Digite o valor do produto..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.dt_hr_cadastro}
                            onChangeText={dt_hr_cadastro => this.setState({ dt_hr_cadastro })}
                            placeholder="Digite a data de cadastro do produto..."
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
