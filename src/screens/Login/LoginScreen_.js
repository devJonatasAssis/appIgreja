import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import axios from 'axios'
import { server, showError } from '../../common'
import commonStyles from '../../styles/commonStyles'
import backgroundImage from '../../../assets/imgs/login.jpg'
import AuthInput from '../../lib_frontend/components/AuthInput'
import stylesExt from "./styles";

const logoUpIgreja = require("../../../assets/imgs/logo2.png");

export default class LoginScreen extends Component {
    state = {
        stageNew: false, // false quer dizer que está na tela de login, true na tela de cadastro de Usuário
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            })

            axios.defaults.headers.common['Authorization']
                = `bearer ${res.data.token}`
            this.props.navigation.navigate('HomeScreen')
        } catch (err) {
            Alert.alert('Ops! Falha no Login!')
        }
    }

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })

            Alert.alert('Sucesso!', 'Usuário Cadastrado com Sucesso!')
            this.setState({ stageNew: false })
        } catch (err) {
            showError(err)
        }
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }
    }

    render() {
        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim())
            validations.push(this.state.confirmPassword)
            validations.push(this.state.password === this.state.confirmPassword)
        }

        const validForm = validations.reduce((all, v) => all & v)

        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <View style={stylesExt.logoContainer}>
                    <ImageBackground source={logoUpIgreja} style={stylesExt.logo} />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>
                        {this.state.stageNew ? 'Criar a sua Conta' : 'Informe seus Dados'}
                    </Text>

                    {this.state.stageNew &&
                        <AuthInput icon='user' placeholder='Nome'
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })} />}

                    <AuthInput icon='at' placeholder='Email' style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />

                    <AuthInput icon='lock' placeholder='Senha' secureTextEntry={true}
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />

                    {this.state.stageNew &&
                        <AuthInput icon='lock' placeholder='Confirmar Senha'
                            secureTextEntry={true}
                            style={styles.input}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />}

                    <TouchableOpacity disabled={!validForm}
                        onPress={this.signinOrSignup}>
                        <View style={[styles.button, validForm ? { backgroundColor: '#AAA' } : {}]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10 }}
                        onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Já Possui Conta?' : 'Ainda não possui Conta?'}
                        </Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 50,
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 20,
        width: '90%'
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 15
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 12,
        alignSelf: 'center'
    }
})