import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { View, Platform } from 'react-native';

// import { Container } from './styles';

export default class Search extends Component {
    state = {
        searchFocused: false
    }
    render() {
        const { onLocationSelected } = this.props;
        const { searchFocused } = this.state;
        return <GooglePlacesAutocomplete
            placeholder="Digite uma localidade..."
            placeholderTextColor="#333"
            onPress={onLocationSelected}
            query={{
                key: 'AIzaSyAgJh0zqMqPrOXjfXuDi1b_FVnItmeBrC4',
                language: 'pt'
            }}
            textInputProps={{
                onFocus: () => { this.setState({ searchFocused: true }) },
                onBlur: () => { this.setState({ searchFocused: false }) },
                autoCapitalize: "none",
                autoCorrect: false
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: 'absolute',
                    top: Platform.select({ ios: 60, android: 40 }),
                    width: '100%'
                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: 'transparent',
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0
                },
                textInput: {
                    height: 45,
                    margin: 0,
                    borderRadius: 8,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    borderWidth: 1,
                    borderColor: '#DDD',
                    fontSize: 14
                },
                listView: {
                    borderWidth: 1,
                    borderColor: '#DDD',
                    backgroundColor: '#FFF',
                    marginHorizontal: 20,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    marginTop: 10,
                },
                description: {
                    fontSize: 13
                },
                row: {
                    padding: 20,
                    height: 58
                }
            }}
        />;
    }
}
