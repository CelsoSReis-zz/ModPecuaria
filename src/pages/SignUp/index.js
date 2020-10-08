import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Text, Image, TextInput, Platform} from 'react-native';


import styles from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useContext(AuthContext);

  console.log(user.nome);

  return (
    <View style={styles.geral} >
       <View
       style={styles.formView}
       behavior={Platform.OS === 'ios' ? 'padding' : ''}
       enabled
       >         
         <View style={styles.AreaInput}>
           <TextInput
           style={styles.textoInput}
           placeholder="Nome"
           autoCorrect={false}
           autoCapitalize="none"
           value={nome}
           onChangeText={ (text) => setNome(text) }
           />
         </View>
         
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
 
       <TouchableOpacity style={styles.botaoCadastrar}>
         <Text style={styles.textoCadastrar}>Cadastrar</Text>
       </TouchableOpacity>
 
       </View>
    </View>
   );
}