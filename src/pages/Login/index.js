import React, {Component} from 'react';
import {View, TouchableOpacity, Modal, Text, StyleSheet, Image, TextInput} from 'react-native';
import logos from '../../assets/img/logo.png';
/*import { useNavigation } from '@react-navigation/native'; não precisa importar o useNavigationna classe*/

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
    this.paginaHome = this.paginaHome.bind(this);
  }
  entrar(){
    this.setState({ modalVisible:true });
  }
  sair(visible) {
    this.setState({ modalVisible: visible });
  }
  paginaHome() {
    this.props.navigation.navigate('Home');
}
  render() {
    return(
      <View>
        <TouchableOpacity style={styles.btnEntrar} onPress={ this.entrar }>
          <View style={styles.btnArea}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>Entrar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCadastro} onPress={ this.entrar }>
          <View style={styles.btnArea}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
        <Modal animationType="slide" visible={ this.state.modalVisible} >
          <View style={styles.modalLogin}>
            <View style={styles.logotipo}>
              <Image source={logos} style={{ width: 170, height: 50 }} />
            </View>
            <View style={styles.inputLogin}>
              <TextInput style={styles.inputUsuario} placeholder='Usuário' />
              <TextInput style={styles.inputSenha} placeholder='Senha'/>
            </View>
            <View style={styles.loginEntrarECancelar}>
              <TouchableOpacity onPress={this.paginaHome} style={styles.btnModalEntrar}>
                <View style={styles.btnAreaModal}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>Entrar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => this.sair(false)} style={styles.btnCancelar}>
                <View style={styles.btnAreaModal}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>CANCELAR</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    padding: 10,
  },
  btnEntrar: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25,
  },
  btnCadastro: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25,
    marginTop: 20
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logotipo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginEntrarECancelar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAreaModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnModalEntrar: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: 'red',
  },
  btnCancelar: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: 'red',
  },
  inputLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputUsuario:{
    width: 300,
    padding: 4,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 18,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 18,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  inputSenha:{
    width: 300,
    padding: 4,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 18,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 15,
    backgroundColor: '#fff',
    textAlign: 'center',
  }
});

export default Login;
