import React, {Component} from 'react';
import {View, TouchableOpacity, Modal, Text, StyleSheet} from 'react-native';

class Formulario extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar(){
    this.setState({ modalVisible:true });
  }
  sair(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return(
      <View>
        <TouchableOpacity style={styles.btnEntrar} onPress={ this.entrar }>
          <View style={styles.btnArea}>
            <Text>Entrar</Text>
          </View>
        </TouchableOpacity>
        <Modal animationType="slide" visible={ this.state.modalVisible} >
          <View style={styles.modalLogin}>
            <Text>Seja Bem Vindo!</Text>
            <TouchableOpacity onPress={ () => this.sair(false)}>
              <View>
                <Text>Sair</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.
create({
  modalLogin: {
    flex: 1,
    backgroundColor: 'red',
  },
  btnEntrar: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Formulario;
