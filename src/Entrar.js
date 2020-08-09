import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

export default class App extends Component {
  render(){
    return (
        <View>
            <Text>Seja Bem Vindo!</Text>
            <Button title="Sair" onPress={ this.props.fechar }/>
        </View>
    );
  }
}

