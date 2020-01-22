import React from 'react';
import { Text, ScrollView, StyleSheet, View, FlatList, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';
import InputSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInputMask } from 'react-native-masked-text';

const tipo_chamada = [
    { label: 'EBD', value: 0 },
    { label: 'IBADEP', value: 1 }
]

const turma = [
    { label: 'Ovelhinhas de Cristro', value: 'ovelhinhas' },
    { label: 'Soldadinhos de Jesus', value: 'soldadinhos' },
    { label: 'Herdeiros do Pai', value: 'heideiros' },
    { label: 'AbraÃ£o', value: 'abraao' },
    { label: 'Sara', value: 'sara' }
]

const periodo = [
    { label: '1° Trimestre', value: '1' },
    { label: '2° Trimestre', value: '2' },
    { label: '3° Trimestre', value: '3' },
    { label: '4° Trimestre', value: '4' },
]


export default class Chamada extends React.Component {
    keyExtractor = (item, index) => index.toString()
    constructor(props) {
        super(props);

        this.inputRefs = {
            turma: null,
            periodo: null,
            tipo_chamada: null
        };

        this.state = {
            teste: '',
            turma: undefined,
            periodo: undefined,
            tipo_chamada: undefined,
            data_periodo: new Date(),
            checked: true,
            presenca: true,
            modalVisible: false,
            alunos: [
                {
                    id: 1,
                    nome: "Alisson Rossi",
                    num_faltas: "Faltas: " + 5,
                },
                {
                    id: 2,
                    nome: "Bruno Moreira do Santos",
                    num_faltas: "Faltas: " + 5,
                },
                {
                    id: 3,
                    nome: "Jonatas de Assis Silva",
                    num_faltas: "Faltas: " + 5,
                },
                {
                    id: 4,
                    nome: "Jonatas Nobre",
                    num_faltas: "Faltas: " + 5,
                },
                {
                    id: 5,
                    nome: "Samuel Lobo",
                    num_faltas: "Faltas: " + 5,
                },
                {
                    id: 6,
                    nome: "Gustavo Ramos",
                    num_faltas: "Faltas: " + 5,
                },
                {
                    id: 7,
                    nome: "Zaqueu",
                    num_faltas: "Faltas: " + 5,
                },
                {
                    id: 8,
                    nome: "Elizama Galdino",
                    num_faltas: "Faltas: " + 5,
                }
            ],
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    renderItem = ({ item }) => (
        <View>
            <ListItem title={item.nome}
                subtitle={item.num_faltas}
                leftAvatar={
                    <View>
                        <TouchableOpacity style={styles.buttonPresenca}>
                            <Text style={styles.textoBotaoPresenca}>C</Text>
                        </TouchableOpacity>
                    </View>
                }
                // rightAvatar={
                //     <View>
                //         <CheckBox
                //             title='Bíblia'
                //             checked={this.state.checked}
                //         />
                //         <CheckBox
                //             title='Revista'
                //             checked={this.state.checked}
                //         />
                //     </View>
                // }
                bottomDivider
            />

        </View>
    )

    render() {
        const placeholder = {
            label: 'Selecione',
            value: null,
            color: '#9EA0A4',
        };

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
                    <Text>Tipo de Chamada</Text>
                    <View paddingVertical={5} />
                    <InputSelect
                        placeholder={placeholder}
                        items={tipo_chamada}
                        onValueChange={value => {
                            this.setState({
                                tipo_chamada: value,
                            });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.tipo_chamada} />

                    <View paddingVertical={5} />

                    <Text>Selecione o Perí­odo</Text>
                    <InputSelect
                        placeholder={placeholder}
                        items={periodo}
                        onValueChange={value => {
                            this.setState({
                                periodo: value,
                            });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.periodo}
                    />

                    <View paddingVertical={5} />

                    <Text>Selecione a Turma</Text>
                    <InputSelect
                        placeholder={placeholder}
                        items={turma}
                        onValueChange={value => {
                            this.setState({
                                turma: value,
                            });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.turma}
                    />

                    <View paddingVertical={5} />

                    <Text>Selecione a Data</Text>
                    <View paddingVertical={5} />
                    <DatePicker style={{ width: 200 }}
                        date={this.state.data_periodo}
                        mode="date"
                        placeholder="Selecione a Data"
                        format="DD/MM/YYYY"
                        confirmBtnText="Confirmar"
                        cancelBtnText="Cancelar"
                        customStyles={{
                            dateIcon: {
                                position: "absolute",
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(data_periodo) => { this.setState({ date: data_periodo }) }}
                    />

                    <View paddingVertical={10} />

                    <TouchableHighlight
                        style={styles.botao}
                        onPress={() => console.log('Registro salvo com Sucesso!')}>
                        <Text style={styles.textButton}>Iniciar Chamada</Text>
                    </TouchableHighlight>

                    <View paddingVertical={10} />

                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.alunos}
                        renderItem={this.renderItem}
                    />

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            alert('Modal fechado com sucesso');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text style={styles.tituloModal}>Finalizar Chamada</Text>

                                <Text style={styles.labelModal}>Quantidade de Revistas:</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.teste}
                                    onChangeText={teste => this.setState({ teste })}
                                />

                                <Text style={styles.labelModal}>Quantidade de Bíblias:</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.teste}
                                    onChangeText={teste => this.setState({ teste })}
                                />

                                <Text style={styles.labelModal}>Total de Visitas:</Text>
                                <TextInput
                                    style={styles.input}
                                    value={this.state.teste}
                                    onChangeText={teste => this.setState({ teste })}
                                />

                                <Text style={styles.labelModal}>Valor arrecadado:</Text>
                                <TextInputMask
                                    type={'money'}
                                    options={{precision: 2, separator: ',', delimiter: '.', unit: 'R$', suffixUnit: ''}}
                                    keyboardType="numeric"
                                    style={styles.input}
                                    value={this.state.teste}
                                    onChangeText={teste => this.setState({ teste })}
                                />

                                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <TouchableOpacity
                                        style={styles.hideModal}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text style={styles.textoBotaoFimChamada}>Cancelar</Text>
                                        <Icon style={styles.icon} name="times" size={20}></Icon>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.concluirModal}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text style={styles.textoBotaoFimChamada}>Confirmar</Text>
                                        <Icon style={styles.icon} name="check" size={20}></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View >
                    </Modal>


                    <View style={styles.fimChamada}>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(true);
                        }} style={styles.botaoFimChamada}>
                            <Text style={styles.textoBotaoFimChamada}>Finalizar Chamada</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    scrollContentContainer: {
        paddingTop: 40,
        paddingBottom: 10,
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
        backgroundColor: "#00A9FF",
        marginTop: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    textButton: {
        fontSize: 18,
        color: "#FFF"
    },
    list: {
        paddingHorizontal: 20,
    },

    listItem: {
        backgroundColor: '#EEE',
        marginTop: 20,
        padding: 30,
        flexDirection: "row"
    },
    botaoPresenca: {
        backgroundColor: "#006400",
        width: 50,
        height: 50,
        borderRadius: 6,
    },
    textoBotaoPresenca: {
        color: "#FFF",
        fontSize: 35,
        marginLeft: 13
    },
    textNome: {
        fontSize: 20,
    },
    buttonPresenca: {
        backgroundColor: "green",
        width: 50,
        height: 50
    },
    textoBotaoPresenca: {
        color: "#FFF",
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 15
    },
    fimChamada: {
        marginTop: 50,
    },
    botaoFimChamada: {
        borderRadius: 6,
        backgroundColor: "#00A9FF",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    textoBotaoFimChamada: {
        color: "#FFF",
        fontSize: 15
    },
    tituloModal: {
        fontSize: 20,
        textAlign: 'center'
    },
    labelModal: {
        marginTop: 30,
        marginLeft: 15,
        fontSize: 15,
        color: "#000",
        fontWeight: "bold"
    },
    concluirModal: {
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#006400",
        margin: 15,
        borderRadius: 6,
        flexDirection: "row",
    },
    hideModal: {
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        margin: 15,
        borderRadius: 6,
        flexDirection: "row",
    },
    icon: {
        color: "#FFF",
        marginLeft: 10
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
