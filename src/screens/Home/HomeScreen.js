import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';
import Dashboard from '../../lib_frontend/components/Dashboard';
import Api from "../../services/api";
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../lib_frontend/components/HeaderMenu';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ImagemDados from './files/dados.png';
import ImagemLancamentos from './files/lancamentos.png';
import ImagemOracao from './files/oracao.png';
import ImagemDiretoria from './files/diretoria.png';
import ImagemCarteirinha from './files/carteirinha.png';

const items = [
    { name: 'Meus Dados', background: '', imagem: ImagemDados, router: 'MyDados' },
    { name: 'Meus Lançamentos', background: '', imagem: ImagemLancamentos, router: 'MyDizimos' },
    { name: 'Oração ou Visita', background: '', imagem: ImagemOracao, router: 'PedidoOracaoVisita' },
    { name: 'Carteirinha', background: '', imagem: ImagemCarteirinha, router: 'Carteirinha' },

    // Eu tirei pois vou colocar os registro destes na pï¿½gina FEED que serï¿½ a pï¿½gina inicial
    //{ name: 'Eventos', background: '', icon: 'calendar' },
    //{ name: 'Aniversariantes', background: '', icon: 'calendar' },
];
let feitoLogin = false;

export default class App extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    componentWillMount() {
        if (!feitoLogin) {
            feitoLogin = true;
            this.fazerLogin();
        }
    }

    async fazerLogin() {
        try {
            const login = await Api('login', 'suporte', 'jgs01jas', 1, null);
            console.table('Login - ', login);

            if (login.status) {
                await AsyncStorage.setItem("token", login.dados.token);
                await AsyncStorage.setItem("codigoCliente", "1");
            } else {
                feitoLogin = false;
            }
        } catch (err) {
            feitoLogin = false;
            console.log('Erro ao fazer login', err);
        }
    }

    _card = el => {
        console.log('Card: ' + el.name)
    };

    render() {
        return (
            <View style={styles.container}>
                {/* Aqui é o cabeçalho que contem a barra do menu e a logo no centro  */}
                <View style={{ backgroundColor: "#fff", height: 80 }}>
                    <View style={{ height: 50, width: 50, marginLeft: 15, alignItems: "center" }}>
                        <Icon name="bars" size={24} style={{ color: '#1E90FF', paddingTop: 30 }} onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ top: -30 }} source={require('../../../assets/imgs/logo1.png')} />
                    </View>
                </View>
                {/* --------- */}
                <Dashboard navigation={this.props.navigation} items={items} background={true} card={this._card} column={2} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'android' ? 76 : 100,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        ...Platform.select({
            ios: { backgroundColor: '#f00', paddingTop: 24 },
            android: { backgroundColor: '#00f' }
        }),
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
});