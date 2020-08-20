import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Benfeitorias({routes}) {
    const navigation = useNavigation();
    return(
        <View>
            <Text>Benfeitorias</Text>
            <Button
            title="Voltar para Home!"
            onPress={ () => navigation.goBack() }
            />
      </View>
    );
}