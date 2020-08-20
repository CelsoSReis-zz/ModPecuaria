import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function paginaBovinos(){
    navigation.navigate('Bovinos');
  }
  function paginaFinanceiro(){
    navigation.navigate('Financeiro');
  }
  function paginaMaquinas(){
    navigation.navigate('Maquinas');
  }
  function paginaBenfeitorias(){
    navigation.navigate('Benfeitorias');
  }

 return (
   <View>
     <Text>Home</Text>
     <Text>Bem vindo a tela home!!</Text>
     <Button
     title="Bovinos"
     onPress={paginaBovinos}
     />
     <Button
     title="Financeiro"
     onPress={paginaFinanceiro}
     />
     <Button
     title="Máquinas"
     onPress={paginaMaquinas}
     />
     <Button
     title="Benfeitorias"
     onPress={paginaBenfeitorias}
     />
   </View>
  );
}