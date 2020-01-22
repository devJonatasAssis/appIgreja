import React, { Component } from 'react';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class HeaderMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ backgroundColor: "#fff" }}>
                <View style={{ height: 50, width: 50, marginLeft: 15, alignItems: "center" }}>
                    <Icon name="bars" size={24} style={{ color: '#1E90FF', paddingTop: 10 }} onPress={() => this.props.navigation.openDrawer()} />
                </View>
            </View>
        )

    }
}
