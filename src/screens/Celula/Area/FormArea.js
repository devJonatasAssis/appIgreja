import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default class FormMembro extends React.Component {
    state = {
        nome_area: '',
        cpf: '',
        rg: '',
        dt_nascimento: '',
        endereco: '',
        bairro: '',
        numero: '',
        email: '',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <ScrollView>
                        <TextInput
                            style={styles.input}
                            label="Nome"
                            mode="outlined"
                            selectionColor="#3eee"
                            underlineColor="#3eee"
                            value={this.state.nome}
                            onChangeText={nome => this.setState({ nome })}
                        />


                        <TextInput
                            style={styles.input}
                            label="CPF"
                            mode="outlined"
                            value={this.state.cpf}
                            onChangeText={cpf => this.setState({ cpf })}
                        />

                        <TextInput
                            style={styles.input}
                            label="RG"
                            mode="outlined"
                            value={this.state.rg}
                            onChangeText={rg => this.setState({ rg })}
                        />

                        <TextInput
                            style={styles.input}
                            label="Data de Nascimento"
                            mode="outlined"
                            value={this.state.dt_nascimento}
                            onChangeText={dt_nascimento => this.setState({ dt_nascimento })}
                        />

                        <TextInput
                            style={styles.input}
                            label="Endereço"
                            mode="outlined"
                            value={this.state.endereco}
                            onChangeText={endereco => this.setState({ endereco })}
                        />

                        <TextInput
                            style={styles.input}
                            label="Bairro"
                            mode="outlined"
                            value={this.state.bairro}
                            onChangeText={bairro => this.setState({ bairro })}
                        />

                        <TextInput
                            style={styles.input}
                            label="Número"
                            mode="outlined"
                            selectionColor="green"
                            value={this.state.numero}
                            onChangeText={numero => this.setState({ numero })}
                        />

                        <TextInput
                            style={styles.input}
                            label="Email"
                            mode="outlined"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />

                        <Button
                            style={styles.botao}
                            icon="check"
                            mode="contained"
                            loading
                            onPress={() => console.log('Registro salvo com Sucesso!')}>
                            Salvar
                        </Button>
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
    botao: {
        backgroundColor: "#006400",
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        height: 50
    }
});
