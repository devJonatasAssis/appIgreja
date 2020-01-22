import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Dashboard from '../../lib_frontend/components/Dashboard';
import ImagemTurma from './files/turma.png';
import ImagemDisciplina from './files/disciplina.png';
import ImagemChamada from './files/chamada.png';

const items = [
    { name: 'Turma', background: '#3498db', imagem: ImagemTurma, router: 'Turma' },
    { name: 'Disciplina', background: '#3498db', imagem: ImagemDisciplina, router: 'Disciplina' },
    { name: 'Realizar Chamada', background: '#006400', imagem: ImagemChamada, router: 'Chamada' },
];

export default class App extends Component {
    _card = el => {
        console.log('Card: ' + el.name)
    };

    render() {
        return (
            <View style={styles.container}>
                {/* Aqui Ã© o cabeÃ§alho que contem a barra do menu e a logo no centro  */}
                <View style={{ backgroundColor: "#fff", height: 80 }}>
                    <View style={{ height: 50, width: 50, marginLeft: 15, alignItems: "center" }}>
                        <Icon name="bars" size={24} style={{ color: '#1E90FF', paddingTop: 30 }} onPress={() => this.props.navigation.openDrawer()} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ top: -30 }} source={require('../../../assets/imgs/logo1.png')} />
                    </View>
                </View>
                {/* --------- */}
                <Text style={styles.title}>Escola Bíblica</Text>
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
