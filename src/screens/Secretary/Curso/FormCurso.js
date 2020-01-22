import * as React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import Api from '../../../services/api';
import AsyncStorage from "@react-native-community/async-storage";

export default class FormCurso extends React.Component {
    state = {
        nome_curso: '',
        local_curso: '',
        endereco: '',
        numero: '',
        dth_inicio: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
        dth_fim: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
        dt_hr_cadastro: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
        obs_curso: '',
    };

    async salvarCurso() {
        const { cod_curso, nome_curso, local_curso, endereco, numero, dth_inicio, dth_fim, obs_curso } = this.state;
        const curso = {
            cod_curso,
            cod_igreja: 1,
            cod_cidade: 1,
            nome_curso,
            dt_hr_cadastro: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
            dth_inicio,
            dth_fim,
            local_curso,
            endereco,
            numero,
            obs_curso
        };
        const cursoSalvo = await Api('salvaCursoMobile', curso);
        if (cursoSalvo.status) {
            Alert.alert('Curso salvo com sucesso! Código: ' + cursoSalvo.dados);
            this.props.navigation.navigate('Curso', { atualizarLista: true });
        } else {
            Alert.alert('Erro ao salvar o Curso ');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView>
                        <TextInput
                            style={styles.input}
                            value={this.state.dt_hr_cadastro}
                            onChangeText={dt_hr_cadastro => this.setState({ dt_hr_cadastro })}
                            placeholder="Digite a data de cadastro do curso..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.nome_curso}
                            onChangeText={nome_curso => this.setState({ nome_curso })}
                            placeholder="Digite o nome do curso..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.local_curso}
                            onChangeText={local_curso => this.setState({ local_curso })}
                            placeholder="Digite o local do curso..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.dth_inicio}
                            onChangeText={dth_inicio => this.setState({ dth_inicio })}
                            placeholder="Digite a data inicial do curso..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.dth_fim}
                            onChangeText={dth_fim => this.setState({ dth_fim })}
                            placeholder="Digite a data final do curso..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.obs_curso}
                            onChangeText={obs_curso => this.setState({ obs_curso })}
                            placeholder="Digite alguma observação do curso..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.endereco}
                            onChangeText={endereco => this.setState({ endereco })}
                            placeholder="Digite o endereço do curso..."
                        />

                        <TextInput
                            style={styles.input}
                            value={this.state.numero}
                            onChangeText={numero => this.setState({ numero })}
                            placeholder="Digite o número do curso..."
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
