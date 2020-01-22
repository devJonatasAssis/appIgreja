import React, { Component, Fragment } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Search from '../Search'
import Directions from '../Directions'
import markerImage from '../../../../assets/imgs/marker.png'
import { LocationBox, LocationText } from './styles'
import { getPixelSize } from '../../../utils'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Map extends Component {
    state = {
        region: null,
        destination: null
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }
                })
            }, // Sucesso

            () => { }, // Erro
            {
                timeout: 2000, // quanto tempo o usuário fica buscando a localidade
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        )
    }

    handleLocationSelected = (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            }
        })
    }

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="location-on" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        const { region, destination } = this.state
        return (
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                    ref={el => (this.mapView = el)}
                >
                    {destination && (
                        <Fragment>
                            <Directions origin={region} destination={destination}
                                onReady={result => {
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: getPixelSize(50),
                                            left: getPixelSize(50),
                                            top: getPixelSize(50),
                                            bottom: getPixelSize(50),
                                        }
                                    })
                                }} />
                            <Marker coordinate={destination} anchor={{ x: 0, y: 0 }}
                                image={markerImage}>
                                <LocationBox>
                                    <LocationText>{destination.title}</LocationText>
                                </LocationBox>
                            </Marker>
                        </Fragment>
                    )}
                </MapView>

                <Search onLocationSelected={this.handleLocationSelected} />
            </View>
        );
    }
}
