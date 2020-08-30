import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Bovinos({ route }) {
 const navigation = useNavigation();

 return (
   <View>
     <View>
     <TouchableOpacity>
       <Text>Compra de Animais</Text>
     </TouchableOpacity>

     <TouchableOpacity>
       <Text>Ganho de Peso</Text>
     </TouchableOpacity>
     
     <TouchableOpacity>
       <Text>Vacinação</Text>
     </TouchableOpacity>

     <TouchableOpacity>
       <Text>IATF</Text>
     </TouchableOpacity>

     <TouchableOpacity>
       <Text>Mortes</Text>
     </TouchableOpacity>


   </View>
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