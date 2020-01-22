import React, { Component } from "react";
import { ImageBackground, View, StatusBar, StyleSheet } from "react-native";
import { Container, Button, H3, Text } from "native-base";
import CheckBox from 'react-native-check-box'

import styles from "./styles";

const launchscreenBg = require("../../../assets/imgs/login.jpg");
const logoUpIgreja = require("../../../assets/imgs/logo2.png");

class InitialScreen extends Component {
  state = {
    isChecked: true
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={logoUpIgreja} style={styles.logo} />
          </View>

          <View style={{ marginBottom: 80 }}>
            <CheckBox
              style={styles.checkBox}
              onClick={() => { this.setState({ isChecked: !this.state.isChecked }) }}
              isChecked={this.state.isChecked}
            />
            <Text style={{
              position: 'absolute',
              left: 50,
              top: 12,
              color: '#FFF'
            }}>
              Aceito os termos de Contrato e Uso.
            </Text>
          </View>

          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text>Vamos lá!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default InitialScreen;
