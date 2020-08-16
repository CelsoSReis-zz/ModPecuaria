import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro({ route }) {
 const navigation = useNavigation();

 return (
   <View>
     <Text>Sobre</Text>
     <Button
     title="Voltar para Home!"
     onPress={ () => navigation.goBack() }
     />
   </View>
  );
}