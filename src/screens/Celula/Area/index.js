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
import AsyncStorage from '@react-native-community/async-storage';

// const baseURL = 'https://api.github.com';
// const searchTerm = 'react';
// const perPage = 20;
let codigoCliente;
export default class Area extends Component {

  componentDidMount = async () => {
    codigoCliente = await AsyncStorage.getItem("codigoCliente");
    this.filterAreas();
  };

  state = {
    token: '',
    visibleAreas: [],
    showStatusAreas: true
  };

  filterAreas = async () => {
    try {
      let visibleAreas = null;

      if (this.state.showStatusAreas) {
        const areas = await Api('retornaAreaMobile', codigoCliente);
        if (areas.status) {
          visibleAreas = areas.dados;
        } else {
          console.log("Erro ao Buscar as Áreas", areas.erro);
        }
      } else {
        const noActive = area => area.status_ativo === "S";
        visibleAreas = this.state.visibleAreas.filter(noActive);
      }
      this.setState({ visibleAreas });
    } catch (err) {
      console.log(err);
    }
  };

  toggleFilter = () => {
    this.setState(
      { showStatusAreas: !this.state.showStatusAreas },
      this.filterAreas
    );
  };

  toggleStatus = id => {
    const areas = this.state.visibleAreas.map(area => {
      if (area.cod_area === id) {
        area = { ...area };
        const codArea = area.cod_area
        const status = area.status_ativo === "S" ? "N" : "S"
        this.alteraStatus(codArea, status)
      }
      return area;
    });
    this.setState({ visibleAreas: areas });
  };

  addArea = async area => {
    try {
      const areaSalvo = await Api('salvarAreaMobile', area, codigoCliente);
      if (areaSalvo.status) {
        Alert.alert('Status alterado com sucesso!')
        this.filterAreas()
      } else {
        console.log("Erro ao alterar o Status", areaSalvo.erro);
      }
    } catch (err) {
      console.log("Erro ao alterar o Status", err);
    }
    this.setState({ areas, showAddArea: false }, this.filterAreas);
  };

  async alteraStatus(codArea, status) {
    try {
      const alteracaoStatus = await Api('alteraStatusArea', codArea, status, codigoCliente);
      if (alteracaoStatus.status) {
        Alert.alert('Status alterado com sucesso!')
        this.filterAreas();
      } else {
        console.log("Erro ao alterar o Status", alteracaoStatus.erro);
      }
    } catch (err) {
      console.log("Erro no alteraStatus", err);
    }
  }

  // renderFooter = () => {
  //   if (!this.state.loading) return null;
  //   return (
  //     <View style={styles.loading}>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // };

  // loadRepositories = async () => {
  //   if (this.state.loading) return;

  //   const { page } = this.state;

  //   this.setState({ loading: true });

  //   const response = await fetch(`${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`);
  //   const repositories = await response.json();

  //   this.setState({
  //     data: [...this.state.data, ...repositories.items],
  //     page: page + 1,
  //     loading: false,
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={headerImage} style={styles.imageHeaderTable}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showStatusAreas ? "eye" : "eye-slash"}
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>
              {this.state.showStatusAreas
                ? "Todos as Áreas"
                : "Apenas as Ativos"}
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
            data={this.state.visibleAreas}
            keyExtractor={item => `${item.cod_area}`}
            renderItem={({ item }) => (
              <Table
                desc={item.nome_area}
                subDesc={item.usuario}
                id={item.cod_area}
                status={item.status_ativo}
                toggleStatus={this.toggleStatus}
              />
            )}
          />
        </View>

        <ActionButton
          buttonColor="rgba(41,91,185,1)"
          onPress={() => {
            this.props.navigation.navigate('FormArea');
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
