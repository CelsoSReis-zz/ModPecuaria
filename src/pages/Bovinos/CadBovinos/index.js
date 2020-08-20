import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function CadBovinos() {
    const navigation = useNavigation();
    return(
        <View>
            <Text>Controle de Bovinos</Text>
            <Button
            title="Voltar para Bovinos!"
            onPress={ () => navigation.goBack() }
            />
            <Button
            title="Voltar para Home!"
            onPress={ () => navigation.dispatch(StackActions.popToTop()) }
            />
      </View>
    );
}