import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SignUp() {
  const [nome, setNome ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  return(
        <View style={styles.login} behavior={Platform.OS === 'ios' ? 'padding' : ''} enable >
          <View style={styles.inputLogin}>
            <TextInput style={styles.inputNome} placeholder='Nome' autoCorrect={false} autoCapitalize="nome" onChangeText={ (text) => setNome(text)} value={nome} />
            <TextInput style={styles.inputUsuario} placeholder='Email' autoCorrect={false} autoCapitalize="email" onChangeText={ (text) => setEmail(text)} value={email}/>
            <TextInput style={styles.inputSenha} placeholder='Senha' autoCorrect={false} autoCapitalize="password" onChangeText={ (text) => setPassword(text)} value={password} />
          </View>
              <View style={styles.loginBtn}>
                <TouchableOpacity style={styles.btnEntrar}>
                  <View style={styles.btnAreaModal}>
                    <Icon name="sign-in" size={19} color="#fff" />
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13, padding: 18}}>Cadastrar</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCancelar}>
                  <View style={styles.btnAreaModal}>
                    <Icon name="ban" size={18} color="#fff" />
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13, padding: 7}}>Cancelar</Text>
                  </View>
                </TouchableOpacity>
              </View>
        </View>
      );
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
    inputNome: {
      width: 300,
      padding: 4,
      borderColor: 'red',
      borderWidth: 1.5,
      marginBottom: 18,
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 10,
      backgroundColor: '#fff',
      textAlign: 'left',
      marginTop: 60,
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
      textAlign: 'left',
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
      textAlign: 'left',
    }
  });
  
  