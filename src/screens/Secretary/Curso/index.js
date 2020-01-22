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
export default class Curso extends Component {

  componentDidMount = async () => {
    this.filterCursos();
  };

  state = {
    token: '',
    visibleCursos: [],
    showStatusCursos: true,
    // loading: false,
    // data: [],
    // page: 1,
  };

  filterCursos = async () => {
    let visibleCursos = null;

    if (this.state.showStatusCursos) {
      const cursos = await Api('retornaCursoMobile');
      if (cursos.status) {
        visibleCursos = cursos.dados;
      } else {
        console.log("Erro ao Buscar os cursos", cursos.erro);
      }
    } else {
      const noActive = curso => curso.status_ativo === "S";
      visibleCursos = this.state.visibleCursos.filter(noActive);
    }
    this.setState({ visibleCursos });
  };

  toggleFilter = () => {
    this.setState(
      { showStatusCursos: !this.state.showStatusCursos },
      this.filterCursos
    );
  };

  toggleStatus = id => {
    const cursos = this.state.visibleCursos.map(curso => {
      if (curso.cod_curso === id) {
        curso = { ...curso };
        const codCurso = curso.cod_curso
        const status = curso.status_ativo === "S" ? "N" : "S"
        this.alteraStatus(codCurso, status)
      }
      return curso;
    });
    this.setState({ visibleCursos: cursos });
  };

  addCurso = async curso => {
    const cursoSalvo = await Api('salvarCursoMobile', curso, codigoCliente);
    if (cursoSalvo.status) {
      Alert.alert('Status alterado com sucesso!')
      this.filterCursos()
    } else {
      console.log("Erro ao alterar o Status", cursoSalvo.erro);
    }
    this.setState({ cursos, showAddCurso: false }, this.filterCursos);
  };

  async alteraStatus(codCurso, status) {
    try {
      const alteracaoStatus = await Api('alteraStatusCurso', codCurso, status, codigoCliente);
      if (alteracaoStatus.status) {
        Alert.alert('Status alterado com sucesso!')
        this.filterCursos();
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
                name={this.state.showStatusCursos ? "eye" : "eye-slash"}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>
              {this.state.showStatusCursos
                ? "Todos os Cursos"
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
            data={this.state.visibleCursos}
            keyExtractor={item => `${item.cod_curso}`}
            // onEndReached={this.loadRepositories}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={this.renderFooter}
            renderItem={({ item }) => (
              <Table
                desc={item.nome_curso}
                subDesc={item.usuario}
                id={item.cod_curso}
                status={item.status_ativo}
                toggleStatus={this.toggleStatus}
              />
            )}
          />
        </View>

        <ActionButton
          onPress={() => {
            this.props.navigation.navigate('FormCurso');
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
