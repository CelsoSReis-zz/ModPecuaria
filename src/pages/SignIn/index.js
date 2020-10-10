import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Text, Image, TextInput, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import styles from './styles';

export default function SignIn() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin(){

  }

 return (
   <View style={styles.geral} >
      <View
      style={styles.formView}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <Image style={styles.logo} source={require('../../assets/Logo.png')}/>
        
        <View style={styles.AreaInput}>
          <TextInput
          style={styles.textoInput}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </View>

        <View style={styles.AreaInput}>
          <TextInput
          style={styles.textoInput}
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text) }
          />
        </View>

      <TouchableOpacity style={styles.botaoEntrar} onPress={handleLogin}>
        <Text style={styles.textoAcessar}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={ () => navigation.navigate('SignUp')}>
        <Text style={styles.textolink}>Criar uma conta!</Text>
      </TouchableOpacity>

      </View>
   </View>
  );
}