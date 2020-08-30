import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Relatorios({routes}) {
    const navigation = useNavigation();
    return(
        <View>
            <Text>Relatórios</Text>
            <Button
            title="Voltar para Home!"
            onPress={ () => navigation.goBack() }
            />
      </View>
    );
}