import * as React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import Api from '../../../services/api';
import AsyncStorage from "@react-native-community/async-storage";

export default class FormEvento extends React.Component {
    state = {
        nome_evento: '',
        local_evento: '',
        dth_inicio: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
        dth_fim: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
        dt_hr_cadastro: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
        obs_evento: '',
        endereco: '',
        numero: '',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView>
                        <TextInput
                            style={styles.input}
                            value={this.state.dt_hr_cadastro}
                            onChangeText={dt_hr_cadastro => this.setState({ dt_hr_cadastro })}
                            placeholder="Digite a data de cadastro do produto..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.nome_evento}
                            onChangeText={nome_evento => this.setState({ nome_evento })}
                            placeholder="Digite o nome do evento..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.local_evento}
                            onChangeText={local_evento => this.setState({ local_evento })}
                            placeholder="Digite o local do evento..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.dth_inicio}
                            onChangeText={dth_inicio => this.setState({ dth_inicio })}
                            placeholder="Digite a data inicial do evento..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.dth_fim}
                            onChangeText={dth_fim => this.setState({ dth_fim })}
                            placeholder="Digite a data final do evento..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.obs_evento}
                            onChangeText={obs_evento => this.setState({ obs_evento })}
                            placeholder="Digite alguma observação do evento..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.endereco}
                            onChangeText={endereco => this.setState({ endereco })}
                            placeholder="Digite o endereço do evento..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.numero}
                            onChangeText={numero => this.setState({ numero })}
                            placeholder="Digite o número do evento..."
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
