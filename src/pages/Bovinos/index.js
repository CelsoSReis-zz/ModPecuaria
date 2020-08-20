import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bovinos({ route }) {
 const navigation = useNavigation();

 return (
   <View>
     <Text>Bovinos</Text>
     <Button
     title="Voltar para Home!"
     onPress={ () => navigation.goBack() }
     />
     <Button
     title="Controle de Bovinos"
     onPress={ () => navigation.navigate('CadBovinos') }
     />
   </View>
  );
}