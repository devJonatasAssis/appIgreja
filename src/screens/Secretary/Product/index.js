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
export default class Produto extends Component {

  componentDidMount = async () => {
    this.filterProdutos();
  };

  state = {
    token: '',
    visibleProdutos: [],
    showStatusProdutos: true,
    // loading: false,
    // data: [],
    // page: 1,
  };

  filterProdutos = async () => {
    let visibleProdutos = null;

    if (this.state.showStatusProdutos) {
      const produtos = await Api('retornaProdutoMobile');
      if (produtos.status) {
        visibleProdutos = produtos.dados;
      } else {
        console.log("Erro ao Buscar os produtos", produtos.erro);
      }
    } else {
      const noActive = produto => produto.status_ativo === "S";
      visibleProdutos = this.state.visibleProdutos.filter(noActive);
    }
    this.setState({ visibleProdutos });
  };

  toggleFilter = () => {
    this.setState(
      { showStatusProdutos: !this.state.showStatusProdutos },
      this.filterProdutos
    );
  };

  toggleStatus = id => {
    const produtos = this.state.visibleProdutos.map(produto => {
      if (produto.cod_produto === id) {
        produto = { ...produto };
        const codProduto = produto.cod_produto
        const status = produto.status_ativo === "S" ? "N" : "S"
        this.alteraStatus(codProduto, status)
      }
      return produto;
    });
    this.setState({ visibleProdutos: produtos });
  };

  addProduto = async produto => {
    const produtoSalvo = await Api('salvarProdutoMobile', produto, codigoCliente);
    if (produtoSalvo.status) {
      Alert.alert('Status alterado com sucesso!')
      this.filterProdutos()
    } else {
      console.log("Erro ao alterar o Status", produtoSalvo.erro);
    }
    this.setState({ produtos, showAddProduto: false }, this.filterProdutos);
  };

  async alteraStatus(codProduto, status) {
    try {
      const alteracaoStatus = await Api('alteraStatusProduto', codProduto, status, codigoCliente);
      if (alteracaoStatus.status) {
        Alert.alert('Status alterado com sucesso!')
        this.filterProdutos();
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
                name={this.state.showStatusProdutos ? "eye" : "eye-slash"}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>
              {this.state.showStatusProdutos
                ? "Todos os Produtos"
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
            data={this.state.visibleProdutos}
            keyExtractor={item => `${item.cod_produto}`}
            // onEndReached={this.loadRepositories}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={this.renderFooter}
            renderItem={({ item }) => (
              <Table
                desc={item.nome_produto}
                subDesc={item.usuario}
                id={item.cod_produto}
                status={item.status_ativo}
                toggleStatus={this.toggleStatus}
              />
            )}
          />
        </View>

        <ActionButton
          onPress={() => {
            this.props.navigation.navigate('FormProduto');
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
