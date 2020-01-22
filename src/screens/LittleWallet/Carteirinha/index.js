import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class Carteirinha extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Gerar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carteirinha}>
          <View style={styles.bordaFoto}>
            <Image style={styles.rotateImage}
              source={require('../../../../assets/imgs/jonatas.jpg')} />
          </View>

          <View style={{ flex: 1, width: 40, backgroundColor: "#a4c6f2", marginLeft: 280 }}></View>
          <Text style={styles.textoNumeroDocumento}>N° do Documento: 265</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewBotao: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  botao: {
    backgroundColor: "#44a360",
    height: 50,
    width: 150
  },
  botaoTexto: {
    fontSize: 17,
    color: "#FFF",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 13
  },
  carteirinha: {
    height: 570,
    backgroundColor: '#3C8DBC',
    margin: 10,
    borderRadius: 6,
  },
  rotateImage: {
    width: 100,
    height: 150,
    transform: [{ rotate: '90deg' }],
    marginLeft: 50
  },
  bordaFoto: {
    width: 200,
    height: 150,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 2,
    marginLeft: 150,
    marginTop: 20
  },
  textoNumeroDocumento: {
    transform: [{ rotate: '90deg' }],
    width: 180,
    fontWeight: "bold",
    color: "#000",
    position: "absolute",
    top: 280,
    left: 210
  }
});
