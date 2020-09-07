import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logos from '../../assets/img/logo.png';
import {getStatusBarHeight} from 'react-native-status-bar-height';


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
  function paginaRelatorios(){
    navigation.navigate('Relatorios');
  }

 return (
   <View style={styles.homeGeral}>
      <View style={styles.logotipo}>
        <Image source={logos} style={{ width: 250, height: 75 }} />
      </View>
     <TouchableOpacity onPress={paginaBovinos}>
       <View style={styles.botaoBovinos}>
         <Text style={styles.textBotao}>BOVINOS</Text>
       </View>
     </TouchableOpacity>
     
     <TouchableOpacity onPress={paginaFinanceiro}>
       <View style={styles.botaoFinanceiro}>
         <Text style={styles.textBotao}>FINANCEIRO</Text>
       </View>
     </TouchableOpacity>
     
     <TouchableOpacity onPress={paginaMaquinas}>
       <View style={styles.botaoMaquinas}>
         <Text style={styles.textBotao}>MÁQUINAS</Text>
       </View>
     </TouchableOpacity>
     
     <TouchableOpacity onPress={''}>
       <View style={styles.botaoAlmoxarife}>
         <Text style={styles.textBotao}>CONTROLE DE ESTOQUE</Text>
       </View>
     </TouchableOpacity>

     <TouchableOpacity onPress={paginaRelatorios}>
       <View style={styles.botaoRelatorios}>
         <Text style={styles.textBotao}>RELATÓRIOS</Text>
       </View>
     </TouchableOpacity>
     
   </View>
  );
}

const styles = StyleSheet.create({
  homeGeral: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0 + getStatusBarHeight(), /*0 + getStatusBarHeight(true) somente se aplica ao ios*/
  },
  logotipo: {
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoBovinos: {
    backgroundColor: 'green',
    padding: 30,
    borderColor: '#fff',
    margin: 4,
  },
  botaoFinanceiro: {
    backgroundColor: 'green',
    padding: 30,
    margin: 4,
    borderColor: '#fff'
  },
  botaoMaquinas: {
    backgroundColor: 'green',
    padding: 30,
    margin: 4,
    borderColor: '#fff'
  },
  botaoRelatorios: {
    backgroundColor: 'green',
    padding: 30,
    margin: 4,
    borderColor: '#fff'
  },
  botaoAlmoxarife: {
    backgroundColor: 'green',
    padding: 30,
    margin: 4,
    borderColor: '#fff'
  },
  textBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
  
});