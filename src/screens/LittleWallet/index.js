'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
  onSuccess = (e) => {
    this.props.navigation.navigate('Carteirinha', { dados: e.data })
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        reactivate={true}
        showMarker={true}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}>Foque no QRCode da Carteirinha</Text>
          </Text>
        }
        permissionDialogTitle={'Aten��o!'}
        permissionDialogMessage={''}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});