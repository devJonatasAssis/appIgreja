import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native'
import { Container, Content, Card, ContentList, CardList } from './style'
import Hr from 'react-native-hr-component'
import { Avatar, Badge, ListItem } from 'react-native-elements';

export default class Directoty extends Component {
    render() {
        const list = [
            {
                name: 'Eliezér',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice Presidente',
                badge: {
                    value: '3 Anos',
                    textStyle: {color: 'white'},
                    containerStyle: { marginTop: -20 },
                    status: "primary"
                }
            }
        ]
        return (
            <Container>
                <Content>
                    <Card>
                        <View style={{ marginTop: 20, marginLeft: 15 }}>
                            <Avatar
                                rounded
                                source={require('../../../assets/imgs/joel.jpg')}
                                size="xlarge"
                            />

                            <Badge
                                status="success"
                                containerStyle={{ position: 'absolute', top: 10, right: 140, }}
                                value="5 Anos"
                            />
                        </View>

                        <View style={styles.ViewNome}>
                            <Text style={styles.textoNome}>
                                Joel Vieira do Santos
                            </Text>
                        </View>

                        <Hr lineColor="#eee" width={1} text="" />

                        <View>
                            <Text style={styles.cargo}>Cargo: Pastor Presidente IEADNE</Text>
                        </View>
                    </Card>
                </Content>

                <View style={{ padding: 20, borderRadius: 6 }}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{
                                    source: { uri: l.avatar_url },
                                    showEditButton: true 
                                }}
                                title={l.name}
                                subtitle={l.subtitle}
                                badge={l.badge}
                            />
                        ))
                    }
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null
    },
    ViewNome: {
        height: 150,
        width: 150,
        overflow: 'hidden',
        position: "absolute",
        right: 5,
        top: 70,
    },
    textoNome: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#625D8E',
        marginLeft: 5,
        textAlign: "center"
    },
    cargo: {
        marginLeft: 10,
    }
})