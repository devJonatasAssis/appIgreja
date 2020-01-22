import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Alert
  // ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import "moment/locale/pt-br";
import headerImage from "../../../../assets/imgs/today.jpg";
import commonStyles from "../../../styles/commonStyles";
import Table from "../../../lib_frontend/components/Table";
import ActionButton from "react-native-action-button";
import Api from "../../../services/api";

// const baseURL = 'https://api.github.com';
// const searchTerm = 'react';
// const perPage = 20;
export default class Evento extends Component {

  componentDidMount = async () => {
    this.filterEventos();
  };

  state = {
    token: '',
    visibleEventos: [],
    showStatusEventos: true,
    // loading: false,
    // data: [],
    // page: 1,
  };

  filterEventos = async () => {
    let visibleEventos = null;

    if (this.state.showStatusEventos) {
      const eventos = await Api('retornaEventoMobile');
      if (eventos.status) {
        visibleEventos = eventos.dados;
      } else {
        console.log("Erro ao Buscar os eventos", eventos.erro);
      }
    } else {
      const noActive = evento => evento.status_ativo === "S";
      visibleEventos = this.state.visibleEventos.filter(noActive);
    }
    this.setState({ visibleEventos });
  };

  toggleFilter = () => {
    this.setState(
      { showStatusEventos: !this.state.showStatusEventos },
      this.filterEventos
    );
  };

  toggleStatus = id => {
    const eventos = this.state.visibleEventos.map(evento => {
      if (evento.cod_evento === id) {
        evento = { ...evento };
        const codEvento = evento.cod_evento
        const status = evento.status_ativo === "S" ? "N" : "S"
        this.alteraStatus(codEvento, status)
      }
      return evento;
    });
    this.setState({ visibleEventos: eventos });
  };

  addEvento = async evento => {
    const eventoSalvo = await Api('salvarEventoMobile', evento, codigoCliente);
    if (eventoSalvo.status) {
      Alert.alert('Status alterado com sucesso!')
      this.filterEventos()
    } else {
      console.log("Erro ao alterar o Status", eventoSalvo.erro);
    }
    this.setState({ eventos, showAddEvento: false }, this.filterEventos);
  };

  async alteraStatus(codEvento, status) {
    try {
      const alteracaoStatus = await Api('alteraStatusEvento', codEvento, status, codigoCliente);
      if (alteracaoStatus.status) {
        Alert.alert('Status alterado com sucesso!')
        this.filterEventos();
      } else {
        console.log("Erro ao alterar o Status", alteracaoStatus.erro);
      }
    } catch (err) {
      console.log("Erro no alteraStatus", err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={headerImage} style={styles.imageHeaderTable}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showStatusEventos ? "eye" : "eye-slash"}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>
              {this.state.showStatusEventos
                ? "Todos os Eventos"
                : "Apenas os Ativos"}
            </Text>
            <Text style={styles.subTitle}>
              {moment()
                .locale("pt_br")
                .format("ddd, D [de] MMMM [de] YYYY")}
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.table}>
          <FlatList
            data={this.state.visibleEventos}
            keyExtractor={item => `${item.cod_evento}`}
            // onEndReached={this.loadRepositories}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={this.renderFooter}
            renderItem={({ item }) => (
              <Table
                desc={item.nome_evento}
                subDesc={item.usuario}
                id={item.cod_evento}
                status={item.status_ativo}
                toggleStatus={this.toggleStatus}
              />
            )}
          />
        </View>

        <ActionButton
          onPress={() => {
            this.props.navigation.navigate('FormEvento');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageHeaderTable: {
    flex: 1,
    opacity: 1
  },
  titleBar: {
    flex: 1,
    justifyContent: "flex-end"
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: "#fff",
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 1
  },
  subTitle: {
    fontFamily: commonStyles.fontFamily,
    color: "#fff",
    fontSize: 10,
    marginLeft: 20,
    marginBottom: 10
  },
  table: {
    flex: 7,
    backgroundColor: "#fff"
  },
  iconBar: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
