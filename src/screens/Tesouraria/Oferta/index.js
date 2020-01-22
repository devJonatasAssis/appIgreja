import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import ActionButton from 'react-native-action-button';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Api from '../../../services/api';
import AsyncStorage from "@react-native-community/async-storage";

export default class Oferta extends Component {

  keyExtractor = (item, index) => index.toString()

  state = {
    dados: []
  }

  async componentDidMount() {
    this.buscarOfertas();
    this.buscarDepartamentos();
  }

  componentWillReceiveProps(props) {
    const { navigation } = props;
    const atualizar = navigation.getParam('atualizarLista');
    atualizar && this.buscarOfertas();
  }

  async buscarDepartamentos() {
    const departamentos = await Api('retornaDepartamentoMobile');
    if (departamentos.status) {
      await AsyncStorage.setItem("todosDepartamentos", JSON.stringify(departamentos.dados));
    } else {
      console.log("Erro ao Buscar os departamentos", departamentos.erro);
    }
  }

  async buscarOfertas() {
    const ofertas = await Api('retornaOfertaMobile');

    if (ofertas.status) {
      await this.setState({ dados: ofertas.dados });

    } else {
      console.log('Erro ao buscar os ofertas', ofertas);
    }
  }

  renderItem = ({ item }) => (
    <View style={styles.listOfertas} >
      <Text style={styles.titulo}>Departamento</Text>
      <Text style={styles.nome}>{item.departamento.nome_departamento}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.valor}>
          <Text style={styles.titulo}>Valor</Text>
          <Text style={styles.valorText}>{item.vr_recebido_formatado}</Text>
        </View>

        <View style={styles.data}>
          <Text style={styles.titulo}>Data Lançamento</Text>
          <Text style={styles.dataText}>{item.dt_hr_recebido}</Text>
        </View>
      </View>
    </View>

  )

  render() {
    const rightContent = (
      <View style={styles.exclude}>
        <TouchableOpacity>
          <Icon name="trash" size={20} color="#FFF" />
          <Text>Exluir</Text>
        </TouchableOpacity>
      </View>
    )
    return (
      <View style={styles.container}>
        <Swipeable leftActionActivationDistance={200} rightContent={rightContent}>
          <FlatList
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            data={this.state.dados} />
        </Swipeable>

        <ActionButton
          onPress={() => {
            this.props.navigation.navigate('FormOferta');
          }}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  listOfertas: {
    backgroundColor: "#FFF",
    height: 150,
    marginLeft: 15,
    marginTop: 25,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },
  nome: {
    fontSize: 18,
    marginLeft: 15
  },
  valorText: {
    color: "#006400",
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
  dataText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#DCDCDC"
  },
})
