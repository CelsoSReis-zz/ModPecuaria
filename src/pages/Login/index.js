import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, TextInput} from 'react-native';
import logos from '../../assets/img/logo.png';
/*import { useNavigation } from '@react-navigation/native'; não precisa importar o useNavigationna classe*/

class Login extends Component {
  constructor(props){
    super(props);
    this.state={

    };
    this.paginaHome = this.paginaHome.bind(this);
  }
  paginaHome() {
    this.props.navigation.navigate('Home');
}
  render() {
    return(
      <View style={styles.login}>
        <View style={styles.logotipo}>
          <Image source={logos} style={{ width: 250, height: 75 }} />
        </View>
        <View style={styles.inputLogin}>
          <TextInput style={styles.inputUsuario} placeholder='Usuário' />
          <TextInput style={styles.inputSenha} placeholder='Senha'/>
        </View>
            <View style={styles.loginBtn}>
              <TouchableOpacity onPress={this.paginaHome} style={styles.btnEntrar}>
                <View style={styles.btnAreaModal}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>Entrar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => this.sair(false)} style={styles.btnCancelar}>
                <View style={styles.btnAreaModal}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>Cancelar</Text>
                </View>
              </TouchableOpacity>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.
create({
  login: {
    flex: 1,
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
  loginBtn: {
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
  btnEntrar: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    marginTop: 0,
    backgroundColor: 'red',
  },
  btnCancelar: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: 'red',
  },
  inputLogin: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputUsuario:{
    width: 300,
    padding: 4,
    borderColor: 'red',
    borderWidth: 1.5,
    marginBottom: 18,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  inputSenha:{
    width: 300,
    padding: 4,
    borderColor: 'red',
    borderWidth: 1.5,
    marginBottom: 18,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
  }
});

export default Login;
