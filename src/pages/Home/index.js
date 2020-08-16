import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function paginaCadastro(){
    navigation.navigate('Cadastro');
  }

 return (
   <View>
     <Text>Home</Text>
     <Text>Bem vindo a tela home!!</Text>
     <Button
     title="Cadastro"
     onPress={paginaCadastro}
     />
   </View>
  );
}