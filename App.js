import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Formulario from './src/login';

class App extends Component {
  render(){
    return(
      <View style={styles.viewGeral}>
        <Formulario />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewGeral: {
    flex: 1,
    backgroundColor: '#0088e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default App;