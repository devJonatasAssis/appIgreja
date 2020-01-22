import React, { Component } from "react";
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  SubText,
  Text
} from "./style";
import { ScrollView, StyleSheet, View, Image, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Hr from 'react-native-hr-component'

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 70
PROFILE_IMAGE_MAX_HEIGHT = 150
PROFILE_IMAGE_MIN_HEIGHT = 90

export default class MyDados extends Component {
  constructor(props) {
    super(props)
    this.state = { scrollY: new Animated.Value(0) }
  }

  componentDidMount = () => {
    this.props.navigation.getParam('dados')
  }

  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2), HEADER_MAX_HEIGHT + 5],
      extrapolate: 'clamp'
    })

    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: 'clamp'
    })

    return (
      <View style={{ backgroundColor: '#FFF', flex: 1 }}>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'lightskyblue',
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: 'center'
        }}>

          <Animated.View style={{ position: 'absolute', bottom: headerTitleBottom }}>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Jonatas de Assis</Text>
          </Animated.View>

        </Animated.View>

        <ScrollView style={styles.scrool}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }])}
        >
          <Animated.View style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderColor: 'white',
            borderWidth: 3,
            overflow: 'hidden',
            marginTop: profileImageMarginTop,
            marginLeft: 30
          }}>
            <Image style={styles.image} source={require('../../../assets/imgs/jonatas.jpg')} />
          </Animated.View>

          <View><Text style={styles.texto}>Jonatas de Assis</Text></View>

          <View style={{ height: 1000 }}></View>
        </ScrollView>

        <ScrollView style={{flex: 1}}>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text>CPF</Text>
            <SubText>110.930.109-08</SubText>

            <Text>RG</Text>
            <SubText>13039531-7</SubText>

            <Text>Endereço</Text>
            <SubText>Rua General Euclides Bueno , 999</SubText>

            <Text>Bairro</Text>
            <SubText>Centro</SubText>

            <Text>Complemento</Text>
            <SubText>Casa</SubText>

            <Text>Cidade</Text>
            <SubText>Nova Esperança - PR</SubText>

            <Text>Nasceu em</Text>
            <SubText>Campinas - SP</SubText>

            <Hr lineColor="#DFDCDD" text="Dados Ministeriais" />

            <Text>Sua Condição</Text>
            <SubText>Em Comunhão</SubText>

            <Text>Data de Batismo nas águas</Text>
            <SubText>23/03/2016</SubText>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrool: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 10,
    color: '#000'
  }
})
