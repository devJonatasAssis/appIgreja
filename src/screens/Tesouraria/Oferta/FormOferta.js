import * as React from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AutoComplete from 'react-native-autocomplete-input';
import Api from '../../../services/api';
import AsyncStorage from "@react-native-community/async-storage";

export default class FormOferta extends React.Component {

    state = {
        departamentos: [],
        departamentosFiltrados: [],
        nomeDepartamento: '',
        cod_departamento: '',
        dt_hr_receber: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
        valor_receber: '',
        cod_caixa: 1,
        fecharFiltro: false,
    };

    componentDidMount() {
        this.buscarDepartamentos();
    }

    async buscarDepartamentos() {
        let departamentos = await AsyncStorage.getItem("todosDepartamentos");
        departamentos = await JSON.parse(departamentos);
        await this.setState({ departamentos, departamentosFiltrados: departamentos });
    }

    async filtrar(text) {
        const filtrados = this.state.departamentos.filter(departamento => (departamento.nome_departamento.includes(text)));
        await this.setState({
            departamentosFiltrados: filtrados,
            nomeDepartamento: text,
            fecharFiltro: false
        });
    }

    async selecionarDepartamento(departamento) {
        await this.setState({
            fecharFiltro: true,
            nomeDepartamento: departamento.nome_departamento,
            cod_departamento: departamento.cod_departamento
        });
    }

    async salvarOferta() {
        const { cod_departamento, valor_receber, dt_hr_receber } = this.state;
        const oferta = {
            cod_departamento,
            cod_igreja: 1,
            cod_forma_pagamento: 1,
            cod_funcionario: 1,
            cod_funcionario_baixa: 1,
            dt_hr_receber: dt_hr_receber,
            dt_hr_recebido: null,
            dt_hr_cadastro: moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
            vr_receber: valor_receber,
            imprimir_comp: 'N',
            cod_conta_analise: 0,
            cod_centro_custo: 1,
        };
        const ofertaSalvo = await Api('salvaOfertaMobile', oferta);
        if (ofertaSalvo.status) {
            Alert.alert('Oferta salva com sucesso! Código: ' + ofertaSalvo.dados);
            this.props.navigation.navigate('Oferta', { atualizarLista: true });
        } else {
            Alert.alert('Erro ao salvar a Oferta ');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView>
                        <AutoComplete
                            data={this.state.departamentosFiltrados}
                            placeholder="Digite o nome do departamento..."
                            value={this.state.nomeDepartamento}
                            onChangeText={text => this.filtrar(text)}
                            hideResults={this.state.fecharFiltro}
                            style={styles.input}
                            renderItem={({ item, i }) => (
                                <TouchableOpacity onPress={() => this.selecionarDepartamento(item)}>
                                    <Text>{item.nome_departamento}</Text>
                                </TouchableOpacity>
                            )}
                        />

                        <TextInput
                            style={styles.input}
                            label="Data da Oferta"
                            value={this.state.dt_hr_receber}
                            onChangeText={dt_hr_receber => this.setState({ dt_hr_receber })}
                        />

                        <TextInputMask
                            style={styles.input}
                            placeholder="Digite o valor da Oferta..."
                            label="Valor"
                            keyboardType="numeric"
                            value={this.state.valor_receber}
                            onChangeText={valor_receber => this.setState({ valor_receber })}
                            type={'money'}
                            options={{ precision: 2, separator: ',', delimiter: '.', unit: 'R$', suffixUnit: '' }}
                        />

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => this.salvarOferta()}>
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
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    }
});
