import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Bovinos from './src/pages/Bovinos';
import Financeiro from './src/pages/Financeiro';
import Maquinas from './src/pages/Maquinas';
import Benfeitorias from './src/pages/Benfeitorias';
import CadBovinos from './src/pages/Bovinos/CadBovinos';

const Stack = createStackNavigator();

export default function App(){
    return (     
        <NavigationContainer>
              <Stack.Navigator initialRouteName="Login" >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Bovinos" component={Bovinos} />
              <Stack.Screen name="Financeiro" component={Financeiro} />
              <Stack.Screen name="Maquinas" component={Maquinas} />
              <Stack.Screen name="Benfeitorias" component={Benfeitorias} />
              <Stack.Screen name="CadBovinos" component={CadBovinos} />

            </Stack.Navigator>
        </NavigationContainer>    
    );
}

