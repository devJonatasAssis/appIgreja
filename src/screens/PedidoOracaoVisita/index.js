import React, { Component } from 'react';
import { AppRegistry, Alert } from 'react-native';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';
 
const fields = [
  {
    type: 'picker',
    name: 'country',
    mode: 'dialog',
    label: 'Tipo de Pedido',
    defaultValue: 'Oração',
    options: ['Visita', 'Oração', 'Ambos'],
  },
  {
    type: 'picker',
    name: 'tp_membro_solicitado',
    mode: 'dialog',
    label: 'Qual a sua situação?',
    defaultValue: 'Normal',
    options: ['Normal', 'Idoso', 'Acamado'],
    required: true
  },
  {
    type: 'picker',
    name: 'local_visita',
    mode: 'dialog',
    label: 'Defina um local',
    defaultValue: 'Domiciliar',
    options: ['Domiciliar', 'Hospitalar', 'Presídio', 'Outros'],
    required: true
  },
  {
    type: 'select',
    name: 'grau_pedido',
    label: 'Grau',
    defaultValue: 'Normal',
    options: ['Normal', 'Urgente', 'Posso esperar'],
    required: true
  },
  {
    type: 'date',
    name: 'dt_agendada',
    mode: 'datetime',
    required: true,
    label: 'Agende uma data'
  },
  {
    type: 'text',
    name: 'user_name',
    required: true,
    label: 'Á quem você pede oração?',
  },
  {
    type: 'text',
    name: 'obs_pre',
    label: 'Deseja informar o assunto?'
  },
];
export default class FormGenerator extends Component {
  login() {
    const formValues = this.formGenerator.getValues();
    Alert.alert('Olá', formValues)
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <GenerateForm ref={(c) => { this.formGenerator = c; }} fields={fields} />
        </View>

        <View style={styles.submitButton}>
          <Button block onPress={() => this.login()}>
            <Text>Enviar</Text>
          </Button>
        </View>

      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#FFF',
  },
  submitButton: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#FFF',
  },
};