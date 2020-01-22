import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import commonStyles from '../../../styles/commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    let check = null
    if (props.status !== "N") {
        check = (
            <View style={styles.active}>
                <Icon name='check' size={15} color='green' />
            </View>
        )
    } else {
        check = (
            <View style={styles.noActive}>
                <Icon name='close' size={15} color='red' />
            </View>
        )
    }

    const descStyle = props.status === "N" ?
        { textDecorationLine: 'line-through' } : {}

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggleStatus(props.id)}>
                <View style={styles.checkContainer}>{check}</View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.description, descStyle]}>
                    {props.desc}
                </Text>
                <Text style={styles.subDescription}>
                    {props.subDesc}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%'
    },
    noActive: {
        height: 25,
        width: 25,
        borderRadius: 15,
        // backgroundColor: '#f90b0b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    active: {
        height: 25,
        width: 25,
        borderRadius: 15,
        // backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    subDescription: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 12,
    },
    exclude: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10
    }
})
