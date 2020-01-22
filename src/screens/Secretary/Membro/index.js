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
export default class Membro extends Component {

  componentDidMount = async () => {
    this.filterMembros();
  };

  state = {
    token: '',
    visibleMembros: [],
    showStatusMembros: true,
    // loading: false,
    // data: [],
    // page: 1,
  };

  filterMembros = async () => {
    let visibleMembros = null;

    if (this.state.showStatusMembros) {
      const membros = await Api('retornaMembroMobile');
      if (membros.status) {
        visibleMembros = membros.dados;
      } else {
        console.log("Erro ao Buscar os membros", membros.erro);
      }
    } else {
      const noActive = membro => membro.status_ativo === "S";
      visibleMembros = this.state.visibleMembros.filter(noActive);
    }
    this.setState({ visibleMembros });
  };

  toggleFilter = () => {
    this.setState(
      { showStatusMembros: !this.state.showStatusMembros },
      this.filterMembros
    );
  };

  toggleStatus = id => {
    const membros = this.state.visibleMembros.map(membro => {
      if (membro.cod_pessoa === id) {
        membro = { ...membro };
        const codPessoa = membro.cod_pessoa
        const status = membro.status_ativo === "S" ? "N" : "S"
        this.alteraStatus(codPessoa, status)
      }
      return membro;
    });
    this.setState({ visibleMembros: membros });
  };

  addMembro = async membro => {
    const membroSalvo = await Api('salvarPessoaMobile', membro, codigoCliente);
    if (membroSalvo.status) {
      Alert.alert('Status alterado com sucesso!')
      this.filterMembros()
    } else {
      console.log("Erro ao alterar o Status", membroSalvo.erro);
    }
    this.setState({ membros, showAddMembro: false }, this.filterMembros);
  };

  async alteraStatus(codPessoa, status) {
    try {
      const alteracaoStatus = await Api('alteraStatusPessoa', codPessoa, status, codigoCliente);
      if (alteracaoStatus.status) {
        Alert.alert('Status alterado com sucesso!')
        this.filterMembros();
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
                name={this.state.showStatusMembros ? "eye" : "eye-slash"}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>
              {this.state.showStatusMembros
                ? "Todos os Membros"
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
            data={this.state.visibleMembros}
            keyExtractor={item => `${item.cod_pessoa}`}
            // onEndReached={this.loadRepositories}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={this.renderFooter}
            renderItem={({ item }) => (
              <Table
                desc={item.nome_pessoa}
                subDesc={item.usuario}
                id={item.cod_pessoa}
                status={item.status_ativo}
                toggleStatus={this.toggleStatus}
              />
            )}
          />
        </View>

        <ActionButton
          onPress={() => {
            this.props.navigation.navigate('FormMembro');
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
