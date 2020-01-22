import React, { Component } from 'react';
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={ destination }
        origin={ origin }
        onReady={ onReady } 
        apikey="AIzaSyAgJh0zqMqPrOXjfXuDi1b_FVnItmeBrC4"
        strokeWidth={3}
        strokeColor="#222"/>

);

export default Directions
