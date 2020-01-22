import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image
} from 'react-native';
import GridView from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

const RippleColor = (...args) =>
  Platform.Version >= 21 ? TouchableNativeFeedback.Ripple(...args) : null;

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      width: width,
    };
  }

  onLayout(e) {
    const { width } = Dimensions.get('window');
    this.setState({ width });
  }

  render() {
    var column = !this.props.column ? 2 : this.props.column;
    var dim = this.state.width / column - 20;
    if (Platform.OS === 'ios') {
      return (
        <View onLayout={this.onLayout.bind(this)} style={{ flex: 1 }}>
          <GridView
            itemDimension={dim}
            items={this.props.items}
            style={styles.gridView}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate(item.router);
                }}
                delayPressIn={0}
                delayPressOut={0}
                useForeground={true}
                background={RippleColor('#fff')}>
                <View
                  style={[
                    styles.itemContainer,
                    {
                      backgroundColor:
                        !item.background || !this.props.background
                          ? '#fff'
                          : item.background,
                      height: dim,
                    },
                  ]}>
                  <Image
                    style={{width: 70, height: 70}}
                    source={item.imagem}
                  />
                  {/* <Icon
                    name={item.icon}
                    size={40}
                    color={
                      !item.background || !this.props.background
                        ? '#1E90FF'
                        : '#fff'
                    }
                  /> */}
                  <Text
                    style={[
                      styles.itemName,
                      {
                        color:
                          !item.background || !this.props.background
                            ? '#000'
                            : '#fff',
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    } else {
      return (
        <View onLayout={this.onLayout.bind(this)} style={{ flex: 1 }}>
          <GridView
            itemDimension={dim}
            items={this.props.items}
            style={styles.gridView}
            renderItem={item => (
              <TouchableNativeFeedback
                onPress={() => {
                  this.props.navigation.navigate(item.router);
                }}
                delayPressIn={0}
                delayPressOut={0}
                useForeground={true}
                background={RippleColor('#fff')}>
                <View
                  style={[
                    styles.itemContainer,
                    {
                      backgroundColor:
                        !item.background || !this.props.background
                          ? '#fff'
                          : item.background,
                      height: dim,
                    },
                  ]}>
                  <Image
                    style={{width: 70, height: 70}}
                    source={item.imagem}
                  />
                  {/* <Icon
                    name={item.icon}
                    size={40}
                    color={
                      !item.background || !this.props.background
                        ? '#3498db'
                        : '#fff'
                    }
                  /> */}
                  <Text
                    style={[
                      styles.itemName,
                      {
                        color:
                          !item.background || !this.props.background
                            ? '#000'
                            : '#fff',
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableNativeFeedback>
            )}
          />
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
  },
});
