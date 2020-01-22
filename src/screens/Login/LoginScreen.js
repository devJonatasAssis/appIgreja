import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Platform, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import logo from '../../../assets/imgs/logo1.png';

export default class LoginSreen extends Component {
    signin = async () => {
        console.log(this.props);
        this.props.navigation.navigate('HomeScreen')
    }
    render() {
        return (
            <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
                <Image source={logo} />

                <View style={styles.form}>
                    <Text style={styles.label}>CÓDIGO DA IGREJA</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite o código da Igreja"
                        placeholderTextColor="#999"
                        keyboardType="numeric" />

                    <Text style={styles.label}>USUÁRIO *</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite o seu usuário"
                        placeholderTextColor="#999" />

                    <Text style={styles.label}>SENHA *</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite a sua senha"
                        placeholderTextColor="#999"
                        secureTextEntry={true} />

                    <TouchableOpacity style={styles.button}
                        onPress={() => { 
                            this.props.navigation.navigate('Home');
                        }}>
                        <Text style={styles.textbutton}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: "#f05a5b",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
    },
    textbutton: {
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 16
    }
})