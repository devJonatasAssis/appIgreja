import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';
import Dashboard from '../../lib_frontend/components/Dashboard';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ImagemMembros from './files/membros.png';
import ImagemCelula from './files/celula.png';
import ImagemCantina from './files/cantina.png';
import ImagemEvento from './files/evento.png';
import ImagemCurso from './files/curso.png';

const items = [
    { name: 'Membros', background: '#3498db', imagem: ImagemMembros, router: 'Membro' },
    { name: 'Produtos Cantina', background: '#02cbef', imagem: ImagemCantina, router: 'Produto' },
    { name: 'Eventos', background: '#02cbef', imagem: ImagemEvento, router: 'Evento' },
    { name: 'Curso', background: '#02cbef', imagem: ImagemCurso, router: 'Curso' },
];

export default class App extends Component {
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
                <Text style={styles.title}>Cadastros</Text>
                <Dashboard navigation={this.props.navigation}
                    items={items}
                    background={false} card={this._card} column={2} />
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
    title: {
        fontSize: 24,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        color: '#878882',
        paddingTop: 10,
        paddingLeft: 10
    }
});
