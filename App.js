import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View} from 'react-native';
import firebase from './src/firebaseConnection';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Bovinos from './src/pages/Bovinos';
import Financeiro from './src/pages/Financeiro';
import Maquinas from './src/pages/Maquinas';
import Relatorios from './src/pages/Relatorios';
import CadBovinos from './src/pages/Bovinos/CadBovinos';


console.disableYellowBox=true;

const Stack = createStackNavigator();

export default function App(){
    const [nome, setNome] = useState('Carregando...');
    const [idade, setIdade] = useState('');

    useEffect(()=> {
        async function dados(){
            await firebase.database().ref('usuarios/1').on('value', (snapshot)=> {
                setNome(snapshot.val().nome);
                setIdade(snapshot.val().idade)
            });//acessando alguma referência na database
        }
        dados();
    }, []);
    
    return (
        <NavigationContainer>
            {/*<View style={{marginTop: 30,marginLeft: 30}}>
                <Text>Olá {nome}</Text>
                <Text>{idade}</Text>     
    </View>*/}
              <Stack.Navigator initialRouteName="Login" >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Bovinos" component={Bovinos} />
              <Stack.Screen name="Financeiro" component={Financeiro} />
              <Stack.Screen name="Maquinas" component={Maquinas} />
              <Stack.Screen name="Relatorios" component={Relatorios} />
              <Stack.Screen name="CadBovinos" component={CadBovinos} />

            </Stack.Navigator>
        </NavigationContainer>    
    );
}

